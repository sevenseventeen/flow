import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class GlobalNavigation extends React.Component {
	render() {
		return (
			<div className="container">
				<ul>
					<li><Link to="/">View Transactions</Link></li>
					<li><Link to="/enter-transactions">Enter Transaction</Link></li>
				</ul>
			</div>
		);
	}
}

export default GlobalNavigation;