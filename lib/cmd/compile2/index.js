const webpack = require('webpack');
const config = require('./webpack.build.js');

const compiler = webpack(config);

function build() {
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stats.toString({
      // chunks: false,
      colors: true
    }));
  });
}

module.exports = {
  build
};
