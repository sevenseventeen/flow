"use strict";
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import webpackConfig from '../webpack.config.js';
import database from './database/database';
import * as apiRoutes from './api/api-routes';

const app = express();
const webpackCompiler = webpack(webpackConfig);
const port = process.env.PORT || 3000;


/* App Configuration */


app.use(express.static('./client/static'));
app.use(webpackMiddleware(webpackCompiler, { hot: true, publicPath: webpackConfig.output.publicPath, noInfo: true }));
app.use(webpackHotMiddleware(webpackCompiler));
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({ 
		extended: true,
		limit: '5mb'
	})
);


/* Get Routes */


app.get('/', (request, response) => { response.sendFile(path.join(__dirname, '../index.html')); });
app.get('/enter-transactions', (request, response) => { response.sendFile(path.join(__dirname, '../index.html')); });
app.get('/api/get/properties/', apiRoutes.getProperties);
app.get('/api/get/transactions/', apiRoutes.getTransactions);
app.get('/api/get/current-balance/', apiRoutes.getCurrentBalance);
app.get('/api/get/profit/', apiRoutes.getProfit);


/* Post Routes */


app.post('/api/post/transaction/', apiRoutes.enterTransaction);


/* Server */


app.listen(port, () => console.log("Server is Running on "+port));