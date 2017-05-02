import axios from 'axios'
import moment from 'moment';
import store from '../store/store';

/* 

The MySQL query takes care of subtracting one day from the start 
and that the end date is <=

*/

export function getProfit(dateRange) {
	let startDate;
	let endDate;
	switch (dateRange) {
		case 'lastMonth':
			startDate = moment().subtract(1, 'month').startOf('month').format("YYYY-MM-DD")
			endDate = moment().subtract(1, 'month').endOf('month').format("YYYY-MM-DD")
			break;
		case 'thisMonth':
			startDate = moment().startOf('month').format("YYYY-MM-DD")
			endDate = moment().endOf('month').format("YYYY-MM-DD")
			break;
		case 'yearToDate':
			startDate = moment().startOf('year').format("YYYY-MM-DD")
			endDate = moment().endOf('month').format("YYYY-MM-DD")
			break;
	}
	return function(dispatch) {
		dispatch({
			type: "GET_PROFIT",
			payload: axios.get('/api/get/profit', {
				params: {
					startDate: startDate,
					endDate: endDate
				}
			})
		})
  	}
}