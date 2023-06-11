"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const e = (0, _express.default)();
e.use(_express.default.json());
e.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});
const PORT = 4000;
e.listen(PORT, () => {
  console.log("Server is running !!!!!");
});