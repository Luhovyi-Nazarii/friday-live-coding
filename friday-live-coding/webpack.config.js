const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;



module.exports = {
  mode,
  // watch: true,
  target,
  devtool,
  // mode: 'none',             // Варианты сборки js файла
  // mode: 'production',       // Варианты сборки js файла
  // mode: 'development',      // Варианты сборки js файла

  entry: devMode ? [path.resolve(__dirname, 'src/app/index.js'), path.resolve(__dirname, 'src/sass/index.scss'), path.resolve(__dirname, 'src/index.html')] : [path.resolve(__dirname, 'src/app/index.js'), path.resolve(__dirname, 'src/sass/index.scss')],
  

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.js',
    // filename: '[name].[contenthash].js',                    // + hash
  },
  plugins: [
    
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
    // minify: false,                                          // минификация html
    }),
    new MiniCssExtractPlugin ({
      filename: 'style.css'

    }),
    
],
 
  
  devServer: {
    // port: 9000,
    // compress: true,
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }, 
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },

      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'image/[name][ext]'
        }
      },

      {
      test: /\.(?:js|mjs|cjs)$/i,
      // test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
    ]
  }
};