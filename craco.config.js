const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins:[
        {
            plugin: CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOptions:{
                        modifyVars:{'primary-color': '#28b071'},
                        javascriptEnabled:true,
                    }
                }
            }
        }
    ]
}