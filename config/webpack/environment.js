const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
// 不要な部分コメントアウトした
// environment.plugins.prepend('Provide',
//     new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery/src/jquery'
//     })
// ) 

module.exports = environment