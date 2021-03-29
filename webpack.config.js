//Este es el archivo de configuración del webpack

/*
*
*   Para instalar módulos, primero hay que tener instalado el Node.js y luego el comando para instalar es npm i -D nombre-del-paquete
*   Para generar el dist poner npm run build
*
*/
//Con esto importo el plugin del webpack para html
const HtmlWebPackPlugin = require('html-webpack-plugin');
//Con esto importo el plugin para extraer el CSS en la carpeta dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//Con esto importo el plugin para optimizar el css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//Con esto importo el plugin para copiar imagenes
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    optimization:{
        //Solo funciona con el mode 'production'
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    module:{
        rules: [
            //Sirven para decirle que hacer con los distintos tipos de archivo
            {
                test: /\.css$/i,
                //Con esto excluye en styles.css
                exclude: /styles\.css$/i,
                use:[
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /styles\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                //Es la condición que debe cumplir, se usan expresiones regulares
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    //Sirve para minimizar el html
                    minimize: false,
                },
            },
            {
                //Aquí trato las imagenes
                test: /\.(png|jpg|svg|gif)$/i,
                use:[{
                    loader: 'file-loader',
                    options:{
                        esModule: false
                    }
                }]
            },
        ],
    },
    //Aquí se ejecuta la instancia que hemos creado antes para que copie el index html de la carpeta src a dist para cuando se suba a producción
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        //Con esto lo que hace es configurar el plugin para generar el CSS global
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        //Con esto configuro el plugin para que me copie los ficheros de imágenes
        new CopyWebPackPlugin({
            patterns:[
                {from: 'src/assets', to: 'assets/'}
            ]
        })
    ]

}