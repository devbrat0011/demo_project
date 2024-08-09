const webpack = require('webpack');
const path = require("path");
const dotenv = require('dotenv');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webPackConfig = require('./webpack.config');
dotenv.config();

function buildConfig(env) {
    const _webpack = webPackConfig(env.envname);
    let _buildType = ["dev", "prod", 'uat', 'prod', 'uatclient', 'qaclient'].indexOf(env.envname);
    if (_buildType != -1) {
        _webpack.devtool = 'inline-source-map';
        _webpack.devServer = {
            static: path.join(__dirname, 'public'),
            host: 'localhost',
            port: 9000,
            open: true,
            historyApiFallback: true
        };
        _webpack.mode = 'development';
    }
    else {
        _webpack.mode = 'production';
        _webpack.optimization = {
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                maxSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: '~',
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            },
            minimize: true,
            minimizer: [
                // new UglifyJsPlugin({
                //     uglifyOptions: {
                //         drop_console: true, // strips console statements,
                //         output: {
                //             comments: false
                //         }
                //     }
                // }),
                new TerserJSPlugin({
                    test: /\.js(\?.*)?$/i,
                }),
                new OptimizeCSSAssetsPlugin({
                    assetNameRegExp: /\.optimize\.css$/g,
                    cssProcessor: require('cssnano'),
                    cssProcessorPluginOptions: {
                        preset: ['default', { discardComments: { removeAll: true } }],
                    },
                    canPrint: true
                })],
        }
        _webpack.plugins.push(
            new MiniCssExtractPlugin(),
            // new CompressionPlugin(),
            //new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/,
              })
            // new BundleAnalyzerPlugin()
        )
    }
    return _webpack;
}
module.exports = buildConfig
