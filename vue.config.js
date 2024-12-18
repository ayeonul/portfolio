const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
});
