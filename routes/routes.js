const express = require('express');
const product = require('../api/v1/product');

const routes = (app) => {
    app.use("/v1/", product);
}

module.exports = routes;