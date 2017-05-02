import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { updateFormValue, enterTransaction, updateCurrentBalance} from '../actions/transaction-actions';
import { getProperties } from '../actions/property-actions';
import { getProfit } from '../actions/profit-actions';

@connect((store) => {
	return {
		transactionForm: store.forms.transactionForm,
		currentBalance: store.transactions.currentBalance
	}
})

class TransactionEntry extends React.Component {

	constructor() {
		super();
	    this.updateFormValue = this.updateFormValue.bind(this);
	    this.enterTransaction = this.enterTransaction.bind(this);
	}

	updateFormValue(event) {
		let inputName = event.target.name;
		let inputValue = event.target.value;
		this.props.dispatch(updateFormValue(inputName, inputValue));
	}

	componentWillMount() {
		console.log("Store: ", this.props);
	}

	enterTransaction() {
		let currentBalance;
		let currentTransactionAmount;
		let newCurrentBalance;
		axios.get('/api/get/current-balance')
			.then((response) => {
				currentBalance = +response.data[0].currentBalance;
				currentTransactionAmount = +this.props.transactionForm.transactionAmount;
				newCurrentBalance =  currentBalance+currentTransactionAmount;
				this.props.dispatch(updateCurrentBalance(newCurrentBalance))
				this.props.dispatch(enterTransaction());
				this.props.dispatch(getProfit('thisMonth'));
			})
	}

	render() {
		return (
			<div>
				<form className="transactionForm">
					<input type="text" name="propertyName" onChange={this.updateFormValue} value={this.props.transactionForm.propertyName} />
					<label>Property Name</label>
					<input type="text" name="unitName" onChange={this.updateFormValue} value={this.props.transactionForm.unitName} />
					<label>Unit Name</label>
					<input type="text" name="transactionType" onChange={this.updateFormValue} value={this.props.transactionForm.transactionType} />
					<label>Transaction Type</label>
					<input type="text" name="transactionPayee" onChange={this.updateFormValue} value={this.props.transactionForm.transactionPayee} />
					<label>Transaction Payee</label>
					<input type="text" name="transactionAmount" onChange={this.updateFormValue} value={this.props.transactionForm.transactionAmount} />
					<label>Transaction Amount</label>
					<input type="text" name="transactionDate" onChange={this.updateFormValue} value={this.props.transactionForm.transactionDate} />
					<label>Transaction Date</label>
					<input type="hidden" name="currentBalance" onChange={this.updateFormValue} value={this.props.currentBalance} />
				</form>
				<a onClick={this.enterTransaction}>Enter Transaction</a>
			</div>
		);
	}
}

export default TransactionEntry;