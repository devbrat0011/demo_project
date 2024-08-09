const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const findEnvType = (envType) => {
    const _dotenvConfig = {};
    switch (envType) {
        case "uat":
            _dotenvConfig.path = './.env.UAT';
            break;
        case "prod":
            _dotenvConfig.path = './.env.PROD';
            break;
        case 'prod-Build':
            _dotenvConfig.path = './.env.PROD';
            break;
        case 'preprod-Build':
            _dotenvConfig.path = './.env.PreProd';
            break;
        case ("uatclient"):
            _dotenvConfig.path = './.env.UATClient';
            break;
        case 'uatclient-Build':
            _dotenvConfig.path = './.env.UATClient';
            break;
        case "qaclient-Build":
            _dotenvConfig.path = './.env.QAClient';
            break;

        case "qaclient":
            _dotenvConfig.path = './.env.QAClient';
            break;
        case "qa":
            _dotenvConfig.path = './.env.QA';
            break;
        case "qa-Build":
            _dotenvConfig.path = './.env.QA';
            break;
        case "dev":
            _dotenvConfig.path = './.env.DEV';
            break;
        default:
            _dotenvConfig.path = './.env';
            break;
    }
    return _dotenvConfig;
}

const webPackConfig = (envType) => {
    const _envType = findEnvType(envType);
    const envVariables = dotenv.config(_envType).parsed;
    const envKeys = Object.keys(envVariables).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(envVariables[next]);
        return prev;
    }, {});
    let folderType = envType !== 'build' ? envType.toString().toUpperCase() : 'build';
    return {
        //mode:"development",
        entry: {
            index: path.join(__dirname, 'src', 'index.js'),
        },
        output: {
            path: path.join(__dirname, folderType),
            filename: '[name].[chunkhash].js'
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        resolve: {
            fallback:{
                fs: false,
                net: false,
                tls: false,
                child_process: false,
            },
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            extensions: ['.js', '.jsx', '.json', '.css']
        },
        // devServer: {
        //     host: 'localhost',
        //     port: 9000,
        //     open: true,
        //     historyApiFallback: true
        // },
        // node: {
        //     fs: 'empty',
        //     net: 'empty',
        //     tls: 'empty',
        //     child_process: 'empty',
        // },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [{loader: 'babel-loader'}],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [envType == 'prod' ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
                    use: {loader: 'file-loader'}
                },
                // {
                //     test: /\.svg$/,
                //     use: [
                //       {
                //         loader: 'svg-url-loader',
                //         options: {
                //           limit: 10000,
                //         },
                //       },
                //     ],
                // },
                {
                    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ 
            //inject: true,
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: path.join(__dirname, 'public', 'favicon.ico')
            // filename: "index.html",
            // favicon: path.join(__dirname, 'public', 'manifest.json'),
            //title: 'Development',
          }),
            new webpack.DefinePlugin(envKeys),
            new CleanWebpackPlugin(),
            new webpack.ProgressPlugin()
        ]
    }
}

module.exports = webPackConfig;