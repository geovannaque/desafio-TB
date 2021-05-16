(function() {
var exports = {};
exports.id = "pages/api/repos";
exports.ids = ["pages/api/repos"];
exports.modules = {

/***/ "./pages/api/repos.js":
/*!****************************!*\
  !*** ./pages/api/repos.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
async function Repositorios(req, res) {
  const dadosGit = await fetch(`https://api.github.com/orgs/takenet/repos?language:C#&sort=created&direction=asc`);
  const dadosJson = await dadosGit.json();
  const repos = [];

  for (var i = 0; i < 5; i++) {
    repos.push({
      full_name: dadosJson[i].full_name,
      description: dadosJson[i].description,
      avatar_url: dadosJson[i].owner.avatar_url
    });
  }

  res.json({
    repos: repos
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Repositorios);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/repos.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYXBpL3JlcG9zLmpzIl0sIm5hbWVzIjpbIlJlcG9zaXRvcmlvcyIsInJlcSIsInJlcyIsImRhZG9zR2l0IiwiZmV0Y2giLCJkYWRvc0pzb24iLCJqc29uIiwicmVwb3MiLCJpIiwicHVzaCIsImZ1bGxfbmFtZSIsImRlc2NyaXB0aW9uIiwiYXZhdGFyX3VybCIsIm93bmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWVBLFlBQWYsQ0FBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNsQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLGtGQUFGLENBQTVCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUF4QjtBQUNBLFFBQU1DLEtBQUssR0FBRyxFQUFkOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QkQsU0FBSyxDQUFDRSxJQUFOLENBQVc7QUFDUEMsZUFBUyxFQUFFTCxTQUFTLENBQUNHLENBQUQsQ0FBVCxDQUFhRSxTQURqQjtBQUVQQyxpQkFBVyxFQUFFTixTQUFTLENBQUNHLENBQUQsQ0FBVCxDQUFhRyxXQUZuQjtBQUdQQyxnQkFBVSxFQUFFUCxTQUFTLENBQUNHLENBQUQsQ0FBVCxDQUFhSyxLQUFiLENBQW1CRDtBQUh4QixLQUFYO0FBS0g7O0FBQ0RWLEtBQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQUNDLFNBQUssRUFBRUE7QUFBUixHQUFUO0FBQ0Q7O0FBQ0gsK0RBQWVQLFlBQWYsRSIsImZpbGUiOiJwYWdlcy9hcGkvcmVwb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBSZXBvc2l0b3Jpb3MocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IGRhZG9zR2l0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy90YWtlbmV0L3JlcG9zP2xhbmd1YWdlOkMjJnNvcnQ9Y3JlYXRlZCZkaXJlY3Rpb249YXNjYCk7XHJcbiAgICBjb25zdCBkYWRvc0pzb24gPSBhd2FpdCBkYWRvc0dpdC5qc29uKCk7XHJcbiAgICBjb25zdCByZXBvcyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgcmVwb3MucHVzaCh7XHJcbiAgICAgICAgICAgIGZ1bGxfbmFtZTogZGFkb3NKc29uW2ldLmZ1bGxfbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhZG9zSnNvbltpXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgYXZhdGFyX3VybDogZGFkb3NKc29uW2ldLm93bmVyLmF2YXRhcl91cmwsXHJcbiAgICAgICAgfSk7ICBcclxuICAgIH1cclxuICAgIHJlcy5qc29uKHtyZXBvczogcmVwb3N9KTtcclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcmlvczsiXSwic291cmNlUm9vdCI6IiJ9