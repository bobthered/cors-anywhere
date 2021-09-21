// requires
const corsAnywhere = require('cors-anywhere');

// host and port settings
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

// create proxy server
corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
  });
