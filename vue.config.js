// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader

      // pass Less.js Options to less-loader
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          primary: '#fff',
        },
      },
    },
  },
};
