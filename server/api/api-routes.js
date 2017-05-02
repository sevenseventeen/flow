import async from 'async';
import database from '../database/database';


/* API GET Routes */


export function getProperties (request, response) {
	var parameters = ['properties'];
	database.genericSelectAll(parameters, response, function(rows){
		response.send(rows);
	});
}

export function getTransactions (request, response) {
	var parameters = ['transactions'];
	database.genericSelectAll(parameters, response, function(rows){
		response.send(rows);
	});
}

export function getCurrentBalance (request, response) {
	var parameters = ['transactions'];
	database.getCurrentBalance(parameters, response, function(rows){
		response.send(rows);
	});
}

export function getProfit(request, response) {
	// console.log("Request:", request);
	var startDate = request.query.startDate;
	var endDate = request.query.endDate;
	var parameters = ['transactions', startDate, 'transactions', endDate];
	database.getProfit(parameters, response, function(rows){
		response.send(rows);
	});
}


/* API POST Routes */


export function enterTransaction (request, response) {
	var parameters = ['transactions', request.body];
	database.genericInsertRecord(parameters, response, function(rows){
		response.send(rows);
	});
}