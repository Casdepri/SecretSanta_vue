const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

const mode = process.env.NODE_ENV == "development" ? "development" : "production"

module.exports = {
    mode: mode,
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
        animation: path.resolve(__dirname, "./src/animation.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  loaders: {
                    scss: 'vue-style-loader!css-loader!sass-loader',
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                  }
                }
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, "./src/template.html"),
            filename: "../index.html"
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin()
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
            vue: 'vue/dist/vue.js',
            components: path.resolve(__dirname, './src/components/'),
            src: path.resolve(__dirname, './src/')
        },
    },
}