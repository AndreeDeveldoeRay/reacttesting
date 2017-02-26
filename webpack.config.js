/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: webpack.config.js
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T17:50:49+01:00
*/



var webpack = require('webpack')

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/entry.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main                : 'app/components/Main',
            TopBar              : 'app/components/parts/TopBar',
            Clock               : 'app/components/parts/Clock',
            Timer               : 'app/components/pages/timer/Timer',
            Countdown           : 'app/components/pages/countdown/Countdown',
            CountdownInput      : 'app/components/pages/countdown/CountdownInput',
            Controls            : 'app/components/pages/countdown/Controls',
            styles              : 'app/styles/app.scss'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheep-module-eval-source-map'
}
