const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = () => {

    const getStyleLoaders = () => {
        return ['style-loader', 'css-loader']
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'My store',
                template: 'public/index.html'
            }),
            new SVGSpritemapPlugin('src/media/svg/**/*.svg', {
                output: {
                    filename: 'sprite.svg',
                    svgo: {
                        plugins: [
                            { removeTitle: true },
                            { convertColors: { shorthex: false } },
                            { convertPathData: false },
                            { removeUnknownsAndDefaults: false }
                        ]
                    }
                },
                sprite: {
                    prefix: false
                }
            })
        ];
        return plugins;
    }

    return {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                // load images
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images'
                            }
                        }
                    ]
                },
                // load fonts
                {
                    test: /\.(woff|woff2|ttf|otf|eot)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                // load css
                {
                    test: /\.css/,
                    use: getStyleLoaders()
                },
                // load sass
                {
                    test: /\.s[ac]ss/,
                    use: [...getStyleLoaders(), 
                        {
                            loader: 'sass-loader',
                            options: {
                                additionalData: '@import "./src/media/helpers/helpers.scss";'
                            }
                        }
                    ]
                },
                // load svg
                {
                    test: /\.svg/,
                    use:['babel-loader',
                        {
                            loader: 'react-svg-loader',
                            options: {
                                jsx: true
                            }
                        }
                    ]
                }
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true,
            historyApiFallback: true,
            port: 8080
        }
    }
}