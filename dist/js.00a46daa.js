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
})({"js/Constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BASE_TICKSPEED = exports.CELL_HEIGHT = exports.CELL_WIDTH = exports.GAME_ROWS = exports.GAME_COLS = exports.GAME_HEIGHT = exports.GAME_WIDTH = void 0;
var GAME_WIDTH = 800;
exports.GAME_WIDTH = GAME_WIDTH;
var GAME_HEIGHT = 600;
exports.GAME_HEIGHT = GAME_HEIGHT;
var GAME_COLS = 20;
exports.GAME_COLS = GAME_COLS;
var GAME_ROWS = 20;
exports.GAME_ROWS = GAME_ROWS;
var CELL_WIDTH = GAME_WIDTH / GAME_COLS;
exports.CELL_WIDTH = CELL_WIDTH;
var CELL_HEIGHT = GAME_HEIGHT / GAME_ROWS;
exports.CELL_HEIGHT = CELL_HEIGHT;
var BASE_TICKSPEED = 30; // 30 fps

exports.BASE_TICKSPEED = BASE_TICKSPEED;
},{}],"js/drawGrid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Constants = require("./Constants.js");

function drawGrid(ctx) {
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.beginPath();

  for (var i = 0; i <= _Constants.GAME_WIDTH; i += _Constants.CELL_WIDTH) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, _Constants.GAME_HEIGHT);
  }

  for (var _i = 0; _i <= _Constants.GAME_HEIGHT; _i += _Constants.CELL_HEIGHT) {
    ctx.moveTo(0, _i);
    ctx.lineTo(_Constants.GAME_WIDTH, _i);
  }

  ctx.stroke();
}

var _default = drawGrid;
exports.default = _default;
},{"./Constants.js":"js/Constants.js"}],"js/KeyboardHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var whenRunning = function whenRunning(game, cb) {
  if (game.state === "running") cb();
};

var defaultKeyboardConfiguration = [{
  keyCode: [87, 38],
  action: function action(_ref) {
    var snake = _ref.snake,
        game = _ref.game;
    return whenRunning(game, function () {
      return snake.direction = "up";
    });
  }
}, {
  keyCode: [83, 40],
  action: function action(_ref2) {
    var snake = _ref2.snake,
        game = _ref2.game;
    return whenRunning(game, function () {
      return snake.direction = "down";
    });
  }
}, {
  keyCode: [65, 37],
  action: function action(_ref3) {
    var snake = _ref3.snake,
        game = _ref3.game;
    return whenRunning(game, function () {
      return snake.direction = "left";
    });
  }
}, {
  keyCode: [68, 39],
  action: function action(_ref4) {
    var snake = _ref4.snake,
        game = _ref4.game;
    return whenRunning(game, function () {
      return snake.direction = "right";
    });
  }
}, {
  keyCode: [32],
  action: function action(_ref5) {
    var game = _ref5.game;
    return game.togglePause();
  }
}];

function KeyboardHandler(instances) {
  var keyboardConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultKeyboardConfiguration;
  window.addEventListener("keydown", function (event) {
    var which = event.which;
    keyboardConfig.forEach(function (config) {
      var keyCode = config.keyCode,
          action = config.action;
      if (keyCode.includes(which)) action(instances);
    });
  });
}

var _default = KeyboardHandler;
exports.default = _default;
},{}],"js/Renderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer = /*#__PURE__*/function () {
  function Renderer(width, heigth, ctx) {
    _classCallCheck(this, Renderer);

    this.width = width;
    this.heigth = heigth;
    this.ctx = ctx;
  }

  _createClass(Renderer, [{
    key: "draw",
    value: function draw() {
      var _this = this;

      for (var _len = arguments.length, renderObjects = new Array(_len), _key = 0; _key < _len; _key++) {
        renderObjects[_key] = arguments[_key];
      }

      renderObjects.forEach(function (renderObject) {
        renderObject.draw(_this.ctx);
      });
    }
  }, {
    key: "clearScreen",
    value: function clearScreen() {
      this.ctx.clearRect(0, 0, this.width, this.heigth);
    }
  }]);

  return Renderer;
}();

var _default = Renderer;
exports.default = _default;
},{}],"js/Game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Renderer = _interopRequireDefault(require("./Renderer.js"));

var _Constants = require("./Constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game(width, height, ctx) {
    _classCallCheck(this, Game);

    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.renderer = new _Renderer.default(width, height, ctx);
    this.state = "paused";
    this.tickSpeedMultiplier = 1;
    this.gameObjects = [];
    this.score = 0;
    this.timePlaying = 0;
  }

  _createClass(Game, [{
    key: "togglePause",
    value: function togglePause() {
      this.state = this.state === "paused" ? "running" : "paused";
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$renderer;

      (_this$renderer = this.renderer).draw.apply(_this$renderer, _toConsumableArray(this.getRenderObjects()));
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      var _this = this;

      if (this.state === "running") {
        this.timePlaying += deltaTime;
        this.gameObjects.forEach(function (gameObject) {
          return gameObject.update(_this);
        }); // update score

        this.score += Math.round(deltaTime / 10);
      }
    }
  }, {
    key: "getRenderObjects",
    value: function getRenderObjects() {
      return this.gameObjects.map(function (gameObject) {
        return gameObject.getRenderObjects();
      }).flat(2);
    }
  }, {
    key: "tickSpeed",
    get: function get() {
      return _Constants.BASE_TICKSPEED * this.tickSpeedMultiplier;
    }
  }]);

  return Game;
}();

var _default = Game;
exports.default = _default;
},{"./Renderer.js":"js/Renderer.js","./Constants.js":"js/Constants.js"}],"js/RenderObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Constants = require("./Constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RenderObject = /*#__PURE__*/function () {
  function RenderObject(width, height, position, styles) {
    _classCallCheck(this, RenderObject);

    this.width = width;
    this.height = height;
    this.position = position;
    this.backgroundColor = (styles === null || styles === void 0 ? void 0 : styles.backgroundColor) || "black";
  }

  _createClass(RenderObject, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(this.position.x * _Constants.CELL_WIDTH, this.position.y * _Constants.CELL_HEIGHT, this.width * _Constants.CELL_WIDTH, this.height * _Constants.CELL_HEIGHT);
    }
  }]);

  return RenderObject;
}();

var _default = RenderObject;
exports.default = _default;
},{"./Constants.js":"js/Constants.js"}],"js/Snake.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RenderObject = _interopRequireDefault(require("./RenderObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snake = /*#__PURE__*/function () {
  function Snake(startPosition, startLength) {
    _classCallCheck(this, Snake);

    this.parts = [];
    this.direction = "right";
    this.startPosition = startPosition;
    this.PART_SIZE = {
      width: 1,
      height: 1
    }; // Add start parts

    for (var i = 0; i < startLength; i++) {
      this.addPart();
    }
  }
  /** Append a new part to the snake */


  _createClass(Snake, [{
    key: "addPart",
    value: function addPart() {
      var firstPart = this.parts.length === 0; // If the snake is empty, add a head, otherwise use the last part as a reference

      var position = firstPart ? this.startPosition : Object.assign({}, this.parts[this.parts.length - 1].position);
      var part = new _RenderObject.default(this.PART_SIZE.width, this.PART_SIZE.height, position, {
        backgroundColor: firstPart ? "black" : "green"
      });
      this.parts.push(part);
    }
    /** Move snake in direction and shift all parts up */

  }, {
    key: "move",
    value: function move() {
      // Shift all parts up
      for (var i = this.parts.length - 1; i > 0; i--) {
        this.parts[i].position = Object.assign({}, this.parts[i - 1].position);
      } // Move head


      var _this$parts = _slicedToArray(this.parts, 1),
          firstPart = _this$parts[0];

      switch (this.direction) {
        case "right":
          firstPart.position.x += 1;
          break;

        case "left":
          firstPart.position.x -= 1;
          break;

        case "up":
          firstPart.position.y -= 1;
          break;

        case "down":
          firstPart.position.y += 1;
          break;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.move();
    }
  }, {
    key: "getRenderObjects",
    value: function getRenderObjects() {
      return this.parts;
    }
  }]);

  return Snake;
}();

var _default = Snake;
exports.default = _default;
},{"./RenderObject.js":"js/RenderObject.js"}],"js/Apple.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RenderObject = _interopRequireDefault(require("./RenderObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Apple = /*#__PURE__*/function () {
  function Apple(position) {
    _classCallCheck(this, Apple);

    this.position = position;
    this.renderObjects = [new _RenderObject.default(1, 1, position, {
      backgroundColor: "yellow"
    })];
  }

  _createClass(Apple, [{
    key: "update",
    value: function update() {}
  }, {
    key: "getRenderObjects",
    value: function getRenderObjects() {
      return this.renderObjects;
    }
  }]);

  return Apple;
}();

var _default = Apple;
exports.default = _default;
},{"./RenderObject.js":"js/RenderObject.js"}],"js/updateStats.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function udpateStats(game, snake) {
  var snakePositionSpan = document.getElementById("snake-position");
  var snakeLengthSpan = document.getElementById("snake-length");
  var gameScoreSpan = document.getElementById("game-score"); // update stats

  snakePositionSpan.innerHTML = "".concat(snake.parts[0].position.x, ", ").concat(snake.parts[0].position.y);
  snakeLengthSpan.innerHTML = snake.parts.length;
  gameScoreSpan.innerHTML = game.score;
}

var _default = udpateStats;
exports.default = _default;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Constants = require("./Constants.js");

var _drawGrid = _interopRequireDefault(require("./drawGrid.js"));

var _KeyboardHandler = _interopRequireDefault(require("./KeyboardHandler.js"));

var _Game = _interopRequireDefault(require("./Game.js"));

var _Snake = _interopRequireDefault(require("./Snake.js"));

var _Apple = _interopRequireDefault(require("./Apple.js"));

var _updateStats = _interopRequireDefault(require("./updateStats.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ** INITIALIZE ** //
var gameScreen = document.getElementById("game-screen");
var ctx = gameScreen.getContext("2d");
gameScreen.width = _Constants.GAME_WIDTH;
gameScreen.height = _Constants.GAME_HEIGHT;
var game = new _Game.default(_Constants.GAME_WIDTH, _Constants.GAME_HEIGHT, ctx);
var snake = new _Snake.default({
  x: 0,
  y: 0
}, 10);
game.gameObjects.push(snake);
var apple = new _Apple.default({
  x: 5,
  y: 3
});
game.gameObjects.push(apple);
(0, _KeyboardHandler.default)({
  snake: snake,
  game: game
}); // ** GAMELOOP ** //

var lastTimestamp = 0;

function gameloop(passedTime) {
  var deltaTime = passedTime - lastTimestamp;

  if (deltaTime >= 1000 / game.tickSpeed) {
    lastTimestamp = passedTime; // process game logic

    game.renderer.clearScreen();
    game.draw();
    game.update(deltaTime);
    (0, _drawGrid.default)(ctx);
  }

  (0, _updateStats.default)(game, snake);
  window.requestAnimationFrame(gameloop);
}

gameloop();
},{"./Constants.js":"js/Constants.js","./drawGrid.js":"js/drawGrid.js","./KeyboardHandler.js":"js/KeyboardHandler.js","./Game.js":"js/Game.js","./Snake.js":"js/Snake.js","./Apple.js":"js/Apple.js","./updateStats.js":"js/updateStats.js"}],"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57878" + '/');

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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map