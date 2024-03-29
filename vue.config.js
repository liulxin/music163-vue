module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./production-sub-path" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" // remove base path
        }
      }
    }
  }
};
