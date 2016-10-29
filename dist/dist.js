!function(i){function e(l){if(s[l])return s[l].exports;var n=s[l]={exports:{},id:l,loaded:!1};return i[l].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var s={};return e.m=i,e.c=s,e.p="",e(0)}([function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _routes = __webpack_require__(1);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _ioredis = __webpack_require__(4);\n\nvar _ioredis2 = _interopRequireDefault(_ioredis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar myRedis = new _ioredis2.default();\nvar router = _express2.default.Router();\n_routes2.default.init(router, myRedis);\n\nvar app = (0, _express2.default)();\napp.listen(3000, function () {\n        console.log('Express up started!');\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsibXlSZWRpcyIsInJvdXRlciIsIlJvdXRlciIsImluaXQiLCJhcHAiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSx1QkFBaEI7QUFDQSxJQUFNQyxTQUFTLGtCQUFRQyxNQUFSLEVBQWY7QUFDQSxpQkFBT0MsSUFBUCxDQUFZRixNQUFaLEVBQW9CRCxPQUFwQjs7QUFFQSxJQUFNSSxNQUFNLHdCQUFaO0FBQ0FBLElBQUlDLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQVU7QUFDbkJDLGdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDSCxDQUZMIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvJ1xuaW1wb3J0IFJlZGlzIGZyb20gJ2lvcmVkaXMnO1xuXG5jb25zdCBteVJlZGlzID0gbmV3IFJlZGlzKCk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuUm91dGVzLmluaXQocm91dGVyLCBteVJlZGlzKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygnRXhwcmVzcyB1cCBzdGFydGVkIScpO1xuICAgIH1cbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _positions = __webpack_require__(2);\n\nvar _positions2 = _interopRequireDefault(_positions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Routes = {\n    init: function init(router, redis) {\n        router.get('/positions/:flightID', (0, _positions2.default)(redis).getByFlightID);\n        router.set('/positions/:flightID', (0, _positions2.default)(redis).setByFlightID);\n    }\n};\n\nexports.default = Routes;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LmpzPzBjZmYiXSwibmFtZXMiOlsiUm91dGVzIiwiaW5pdCIsInJvdXRlciIsInJlZGlzIiwiZ2V0IiwiZ2V0QnlGbGlnaHRJRCIsInNldCIsInNldEJ5RmxpZ2h0SUQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxTQUFTO0FBQ1hDLFFBRFcsZ0JBQ05DLE1BRE0sRUFDRUMsS0FERixFQUNTO0FBQ2hCRCxlQUFPRSxHQUFQLENBQVcsc0JBQVgsRUFBbUMseUJBQVVELEtBQVYsRUFBaUJFLGFBQXBEO0FBQ0FILGVBQU9JLEdBQVAsQ0FBVyxzQkFBWCxFQUFtQyx5QkFBVUgsS0FBVixFQUFpQkksYUFBcEQ7QUFDSDtBQUpVLENBQWY7O2tCQU9lUCxNIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9zaXRpb25zIGZyb20gJy4vcG9zaXRpb25zJztcbmNvbnN0IFJvdXRlcyA9IHtcbiAgICBpbml0KHJvdXRlciwgcmVkaXMpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL3Bvc2l0aW9ucy86ZmxpZ2h0SUQnLCBwb3NpdGlvbnMocmVkaXMpLmdldEJ5RmxpZ2h0SUQpO1xuICAgICAgICByb3V0ZXIuc2V0KCcvcG9zaXRpb25zLzpmbGlnaHRJRCcsIHBvc2l0aW9ucyhyZWRpcykuc2V0QnlGbGlnaHRJRClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==")},function(module,exports){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (redis) {\n    getByFlightID: (function (req, res) {\n        res.status('200').send(redis.get(req.params.flightID));\n    });\n\n    setByFlightID: (function (req, res) {\n        res.status('200').send(redis.set(req.params.flightID, req.body));\n    });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3Bvc2l0aW9ucy5qcz9jMDc0Il0sIm5hbWVzIjpbInJlZGlzIiwiZ2V0QnlGbGlnaHRJRCIsInJlcSIsInJlcyIsInN0YXR1cyIsInNlbmQiLCJnZXQiLCJwYXJhbXMiLCJmbGlnaHRJRCIsInNldEJ5RmxpZ2h0SUQiLCJzZXQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBU0EsS0FBVCxFQUFnQjtBQUMzQkMsbUJBQWdCLFdBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzFCQSxZQUFJQyxNQUFKLENBQVcsS0FBWCxFQUFrQkMsSUFBbEIsQ0FBdUJMLE1BQU1NLEdBQU4sQ0FBVUosSUFBSUssTUFBSixDQUFXQyxRQUFyQixDQUF2QjtBQUNILEtBRmU7O0FBSWhCQyxtQkFBZ0IsV0FBQ1AsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDMUJBLFlBQUlDLE1BQUosQ0FBVyxLQUFYLEVBQWtCQyxJQUFsQixDQUF1QkwsTUFBTVUsR0FBTixDQUFVUixJQUFJSyxNQUFKLENBQVdDLFFBQXJCLEVBQStCTixJQUFJUyxJQUFuQyxDQUF2QjtBQUNILEtBRmU7QUFHbkIsQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmVkaXMpIHtcbiAgICBnZXRCeUZsaWdodElEIDogKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoJzIwMCcpLnNlbmQocmVkaXMuZ2V0KHJlcS5wYXJhbXMuZmxpZ2h0SUQpKTtcbiAgICB9XG5cbiAgICBzZXRCeUZsaWdodElEIDogKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoJzIwMCcpLnNlbmQocmVkaXMuc2V0KHJlcS5wYXJhbXMuZmxpZ2h0SUQsIHJlcS5ib2R5KSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvcG9zaXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==")},function(module,exports){eval('module.exports = require("express");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9')},function(module,exports){eval('module.exports = require("ioredis");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpb3JlZGlzXCI/ZWNhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW9yZWRpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlvcmVkaXNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9')}]);