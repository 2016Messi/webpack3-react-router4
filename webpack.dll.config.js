const path    = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: ['react','react-dom','react-router-dom','react-responsive']
    },
    output: {
        path: path.join(__dirname, 'src/js'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'src/js','[name]-manifest.json'),

            name: '[name]_library'
        })
    ]
};
