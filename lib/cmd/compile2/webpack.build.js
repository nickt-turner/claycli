const path = require('path');


// kilnGlob = './node_modules/clay-kiln/dist/clay-kiln-@(edit|view).js',
// componentModelsGlob = path.resolve(process.cwd(), 'components', '**', 'model.js'),

// kilnPluginsGlob = path.resolve(process.cwd(), 'services', 'kiln', 'index.js'),
// componentKilnGlob = path.resolve(process.cwd(), 'components', '**', 'kiln.js'),
// componentClientsGlob = path.resolve(process.cwd(), 'components', '**', 'client.js'),
// layoutModelsGlob = path.resolve(process.cwd(), 'layouts', '**', 'model.js'),
// layoutClientsGlob = path.resolve(process.cwd(), 'layouts', '**', 'client.js'),

module.exports = {
  mode: 'production',
  entry: './includes.js',
  resolve: {
    alias: { path: 'path-browserify' },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
};
