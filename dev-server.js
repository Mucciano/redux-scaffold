'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const DashboardPlugin = require('webpack-dashboard/plugin');

const compiler = webpack(config);
compiler.apply(new DashboardPlugin());

new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    contentBase: config.output.path,
    stats: {
        colors: true
    }
}).listen(3001, 'localhost', err => {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3001');
});