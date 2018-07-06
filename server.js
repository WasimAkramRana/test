"use strict";
const express     	    = require('express');
const app         	    = express();
const bodyParser 	      = require('body-parser');
const cors        	    = require('cors');
global.configs          = require('./configs/index.json');

/**
* This block of code is use for to configure application level middlewares
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + 'public')); //setup static public directory


/**
* This middleware is use for to enable cores for all incomming API calls
*/
app.use(function(req, res, next) {
		res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Credentials", true);
		next();
});

/**
* This block of code is use for define module wise rounting
*/
app.use('/v' + configs.version + '/invoice', require('./routes/invoice'));

app.listen(configs.appPort, function(){
		console.log('running on 3009...');
});
