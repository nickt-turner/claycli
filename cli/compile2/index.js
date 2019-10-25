const build = require('../../lib/cmd/compile2');

function builder(yargs) {
  return yargs
    .usage('Usage: $0 config [value]');
}

function handler() {
  build.build();
}

module.exports = {
  command: 'build',
  describe: 'Compile fonts, media, styles, scripts, and templates',
  aliases: ['build', 'b'],
  builder,
  handler
};
