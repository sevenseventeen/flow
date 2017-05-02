import React from 'react';
import { connect } from 'react-redux';
import { getCurrentBalance } from '../actions/transaction-actions';

@connect((store) => {
	return {
		currentBalance: store.transactions.currentBalance
	}
})

class CurrentBalance extends React.Component {

	constructor(){
		super();
	}

	componentWillMount() {
		this.props.dispatch(getCurrentBalance());
	}

	render() {
		return (
			<h1>This is CurrentBalance: {this.props.currentBalance}</h1>
		);
	}
}

export default CurrentBalance;