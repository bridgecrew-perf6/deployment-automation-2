const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://36.255.69.196:5050',
      changeOrigin: true,
    })
  );
};