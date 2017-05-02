var dotenv = require('dotenv').config();
var mysql = require('mysql');
var connectionPool = mysql.createPool({
	connectionLimit: 10,
	host     : process.env.DATABASE_HOST,
	database : process.env.DATABASE_NAME,
	password : process.env.DATABASE_PASSWORD,
	port     : process.env.DATABASE_PORT,
	user     : process.env.DATABASE_USER,
});

/* Shared Connection Logic (Experimental) */

function connect (query, parameters, response, callback) {
	connectionPool.getConnection(function(error, connection) {
		if(error) {
			console.error("\nDatabase Connection Pool Error: "+error + "\nQuery: "+ query + "\nParams: " + parameters);
			response.redirect('/error');
		} else {
			var queryReference = connection.query(query, parameters, function(error, rows){
				if(error) {
					console.error("Query Error: "+ error + "Query: "+ query);
					response.redirect('/error');
				} else {
					callback(JSON.stringify(rows));	
				}
				connection.release();
			});
			console.log(queryReference.sql);
		}
	});
}


module.exports = {

	genericInsertRecord: function (parameters, response, callback) {
		var query = "INSERT INTO ?? SET ?";
		connect(query, parameters, response, callback);
	},

	genericSelectAll: function(parameters, response, callback) {
		var query = "SELECT * FROM ??";
		connect(query, parameters, response, callback);
	},

	getCurrentBalance: function(parameters, response, callback) {
		// var query = "SELECT currentBalance FROM transactions ORDER BY transactionDate DESC LIMIT 1";
		var query = "SELECT * FROM transactions ORDER BY transactionDate DESC, transactionID DESC LIMIT 1";
		connect(query, parameters, response, callback);
	},

	getProfit: function(parameters, response, callback) {
		var query = `
			(SELECT transactionDate, currentBalance FROM ?? WHERE transactionDate < ? ORDER BY transactionID DESC LIMIT 1)
			UNION 
			(SELECT transactionDate, currentBalance FROM ?? WHERE transactionDate <= ? ORDER BY transactionID DESC LIMIT 1)`;
		connect(query, parameters, response, callback);
	}

}