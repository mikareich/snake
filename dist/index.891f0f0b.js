// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lv0C1":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ceb3f8cc891f0f0b";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8tyFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _constants = require("./Constants");
var _drawGrid = require("./drawGrid");
var _drawGridDefault = parcelHelpers.interopDefault(_drawGrid);
var _keyboardHandler = require("./KeyboardHandler");
var _keyboardHandlerDefault = parcelHelpers.interopDefault(_keyboardHandler);
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
var _snake = require("./Snake");
var _snakeDefault = parcelHelpers.interopDefault(_snake);
var _apple = require("./Apple");
var _appleDefault = parcelHelpers.interopDefault(_apple);
var _updateStats = require("./updateStats");
var _updateStatsDefault = parcelHelpers.interopDefault(_updateStats);
// ** INITIALIZE ** //
const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
gameScreen.width = _constants.GAME_WIDTH;
gameScreen.height = _constants.GAME_HEIGHT;
const game = new _gameDefault.default(_constants.GAME_WIDTH, _constants.GAME_HEIGHT, ctx);
const snake = new _snakeDefault.default({
    x: 0,
    y: 0
}, 10);
game.gameObjects.push(snake);
const apple = new _appleDefault.default({
    x: 5,
    y: 3
});
game.gameObjects.push(apple);
_keyboardHandlerDefault.default({
    snake,
    game
});
// ** GAMELOOP ** //
let lastTimestamp = 0;
function gameloop(passedTime = 0) {
    const deltaTime = passedTime - lastTimestamp;
    if (deltaTime >= 1000 / game.tickSpeed) {
        lastTimestamp = passedTime;
        // process game logic
        game.draw();
        game.update(deltaTime);
        _drawGridDefault.default(ctx);
    }
    _updateStatsDefault.default(game, snake);
    window.requestAnimationFrame(gameloop);
}
gameloop();

},{"./Constants":"5Jobo","./drawGrid":"buv3T","./KeyboardHandler":"j6S9E","./Game":"iZsgX","./Snake":"iUZjX","./Apple":"9vHd2","./updateStats":"5VMUt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Jobo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GAME_WIDTH", ()=>GAME_WIDTH
);
parcelHelpers.export(exports, "GAME_HEIGHT", ()=>GAME_HEIGHT
);
parcelHelpers.export(exports, "GAME_COLS", ()=>GAME_COLS
);
parcelHelpers.export(exports, "GAME_ROWS", ()=>GAME_ROWS
);
parcelHelpers.export(exports, "CELL_WIDTH", ()=>CELL_WIDTH
);
parcelHelpers.export(exports, "CELL_HEIGHT", ()=>CELL_HEIGHT
);
parcelHelpers.export(exports, "BASE_TICKSPEED", ()=>BASE_TICKSPEED
);
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const GAME_COLS = 20;
const GAME_ROWS = 20;
const CELL_WIDTH = GAME_WIDTH / GAME_COLS;
const CELL_HEIGHT = GAME_HEIGHT / GAME_ROWS;
const BASE_TICKSPEED = 30; // 30 fps

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"buv3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./Constants");
function drawGrid(ctx) {
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i = 0; i <= _constants.GAME_WIDTH; i += _constants.CELL_WIDTH){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, _constants.GAME_HEIGHT);
    }
    for(let i1 = 0; i1 <= _constants.GAME_HEIGHT; i1 += _constants.CELL_HEIGHT){
        ctx.moveTo(0, i1);
        ctx.lineTo(_constants.GAME_WIDTH, i1);
    }
    ctx.stroke();
}
exports.default = drawGrid;

},{"./Constants":"5Jobo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6S9E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const defaultKeyboardConfiguration = [
    {
        keyCode: [
            87,
            38
        ],
        action: ({ snake , game  })=>game.state === 'running' && snake.changeDirection('up')
    },
    {
        keyCode: [
            83,
            40
        ],
        action: ({ snake , game  })=>game.state === 'running' && snake.changeDirection('down')
    },
    {
        keyCode: [
            65,
            37
        ],
        action: ({ snake , game  })=>game.state === 'running' && snake.changeDirection('left')
    },
    {
        keyCode: [
            68,
            39
        ],
        action: ({ snake , game  })=>game.state === 'running' && snake.changeDirection('right')
    },
    {
        keyCode: [
            32
        ],
        action: ({ game  })=>game.togglePause()
    }, 
];
function KeyboardHandler(instances, keyboardConfig = defaultKeyboardConfiguration) {
    window.addEventListener('keydown', (event)=>{
        const { which  } = event;
        keyboardConfig.forEach((config)=>{
            const { keyCode , action  } = config;
            if (keyCode.includes(which)) action(instances);
        });
    });
}
exports.default = KeyboardHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZsgX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderer = require("./Renderer");
var _rendererDefault = parcelHelpers.interopDefault(_renderer);
var _constants = require("./Constants");
class Game {
    constructor(width, height, ctx){
        this.state = 'paused';
        this.gameObjects = [];
        this.score = 0;
        this.tickSpeedMultiplier = 1;
        this.timePlaying = 0;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.renderer = new _rendererDefault.default(width, height, ctx);
    }
    /** Toggles game state */ togglePause() {
        this.state = this.state === 'paused' ? 'running' : 'paused';
    }
    /** Number of game ticks per second */ get tickSpeed() {
        return _constants.BASE_TICKSPEED * this.tickSpeedMultiplier;
    }
    /** Draws all game objects */ draw() {
        this.renderer.clearScreen();
        this.renderer.draw(...this.renderObjects);
    }
    /** Performs game logics
   * @param deltaTime Time since last game tick
   */ update(deltaTime) {
        if (this.state === 'running') {
            this.timePlaying += deltaTime;
            this.gameObjects.forEach((gameObject)=>gameObject.update(this)
            );
            // update score
            this.score += Math.round(deltaTime / 10);
        }
    }
    /** All objects to render in game */ get renderObjects() {
        return this.gameObjects.map((gameObject)=>gameObject.renderObjects
        ).flat(2);
    }
}
exports.default = Game;

},{"./Renderer":"OXsMs","./Constants":"5Jobo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"OXsMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Renderer {
    constructor(width, heigth, ctx){
        this.width = width;
        this.heigth = heigth;
        this.ctx = ctx;
    }
    draw(...renderObjects) {
        renderObjects.forEach((renderObject)=>{
            renderObject.draw(this.ctx);
        });
    }
    clearScreen() {
        this.ctx.clearRect(0, 0, this.width, this.heigth);
    }
}
exports.default = Renderer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUZjX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderObject = require("./RenderObject");
var _renderObjectDefault = parcelHelpers.interopDefault(_renderObject);
class Snake {
    constructor(startPosition, startLength = 1){
        this.parts = [];
        this.renderObjects = this.parts;
        this.direction = 'right';
        this.startPosition = startPosition;
        // Add start parts
        for(let i = 0; i < startLength; i += 1)this.addPart();
    }
    /** Append a new part to the snake */ addPart() {
        const firstPart = this.parts.length === 0;
        // If the snake is empty, add a head, otherwise use the last part as a reference
        const position = firstPart ? this.startPosition : {
            ...this.parts[this.parts.length - 1].position
        };
        const part = new _renderObjectDefault.default(1, 1, position, {
            backgroundColor: firstPart ? 'black' : 'green'
        });
        this.parts.push(part);
    }
    /** Change the direction of the snake */ changeDirection(direction) {
        // Only allow changing direction if the new direction is not the opposite of the current direction
        if (this.direction === 'up' && direction === 'down' || this.direction === 'down' && direction === 'up' || this.direction === 'left' && direction === 'right' || this.direction === 'right' && direction === 'left') return;
        this.direction = direction;
    }
    /** Move snake in direction and shift all parts up */ move() {
        // Shift all parts up
        for(let i = this.parts.length - 1; i > 0; i -= 1)this.parts[i].position = {
            ...this.parts[i - 1].position
        };
        // Move head
        const [firstPart] = this.parts;
        switch(this.direction){
            case 'right':
                firstPart.position.x += 1;
                break;
            case 'left':
                firstPart.position.x -= 1;
                break;
            case 'up':
                firstPart.position.y -= 1;
                break;
            case 'down':
                firstPart.position.y += 1;
                break;
            default:
        }
    }
    update() {
        this.move();
    }
}
exports.default = Snake;

},{"./RenderObject":"aYIvH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYIvH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./Constants");
class RenderObject {
    constructor(width, height, position, styles){
        this.width = width;
        this.height = height;
        this.position = position;
        this.backgroundColor = styles?.backgroundColor || 'black';
    }
    draw(ctx) {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.position.x * _constants.CELL_WIDTH, this.position.y * _constants.CELL_HEIGHT, this.width * _constants.CELL_WIDTH, this.height * _constants.CELL_HEIGHT);
    }
}
exports.default = RenderObject;

},{"./Constants":"5Jobo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vHd2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderObject = require("./RenderObject");
var _renderObjectDefault = parcelHelpers.interopDefault(_renderObject);
class Apple {
    constructor(position){
        this.position = position;
        this.renderObjects = [
            new _renderObjectDefault.default(1, 1, position, {
                backgroundColor: 'yellow'
            }), 
        ];
    }
    // eslint-disable-next-line class-methods-use-this
    update(game) {
    }
}
exports.default = Apple;

},{"./RenderObject":"aYIvH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VMUt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function udpateStats(game, snake) {
    const lengthSpan = document.getElementById('snake-length');
    const scoreSpan = document.getElementById('game-score');
    const positionSpan = document.getElementById('snake-position');
    // update stats
    positionSpan.innerHTML = `${snake.parts[0].position.x}, ${snake.parts[0].position.y}`;
    lengthSpan.innerHTML = snake.parts.length.toString();
    scoreSpan.innerHTML = game.score.toString();
}
exports.default = udpateStats;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lv0C1","8tyFx"], "8tyFx", "parcelRequire46ba")

//# sourceMappingURL=index.891f0f0b.js.map
