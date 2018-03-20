const baseConfig = require("./webpack.config.js");

module.exports = Object.assign({}, baseConfig, {
  mode: "production"
});
