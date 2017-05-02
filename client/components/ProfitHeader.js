import React from 'react';
import { connect } from 'react-redux';
import { getProfit } from '../actions/profit-actions';

@connect((store) => {
	return {
		profit: store.profit.profit
	}
})

class ProfitHeader extends React.Component {
	constructor(){
		super();
	}

	componentWillMount() {
		this.props.dispatch(getProfit('thisMonth'));
	}

	render() {
		return (
			<h1>Profit: ${this.props.profit.toFixed(2)}</h1>
		);
	}
}

export default ProfitHeader;