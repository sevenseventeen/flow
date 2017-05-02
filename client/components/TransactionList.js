import React from 'react';
import {connect} from 'react-redux';
import {getTransactions} from '../actions/transaction-actions';

@connect((store) => {
	return {
		transactions: store.transactions.transactions
	}
})

class TransactionList extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {
		this.props.dispatch(getTransactions());
	}

	render() {
		let transactions = this.props.transactions.data;
		const mappedTransactions = transactions.map((transaction, id) => <li key={id}>{transaction.propertyName}</li>)
		return (
			<div>
				<h1>This is transaction list.</h1>
				<ul>{mappedTransactions}</ul>
			</div>
		);
	}
}

export default TransactionList;