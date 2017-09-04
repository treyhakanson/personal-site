const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        alias: {
            components: 'components',
            containers: 'containers',
            'redux-config': 'redux-config',
            styles: 'styles',
            assets: 'assets',
            utils: 'utils',
            routes: 'routes'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(svg)$/,
                loaders: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'react-svg-loader',
                        query: {
                            jsx: true
                        }
                    }
                ]
            },
            { test: /\.(json)$/, use: 'json-loader' },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'react-hot-loader/webpack' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['es2015', { modules: false }],
                                'react',
                                'stage-1'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
};
