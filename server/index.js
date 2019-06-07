// server.js
const next = require("next");

// With express
const express = require("express");
const cookiesMiddleware = require("universal-cookie-express");
const compression = require("compression");

const routes = require("../routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(cookiesMiddleware())
    .use(compression())
    .use(handler)
    .listen(3000);
});
