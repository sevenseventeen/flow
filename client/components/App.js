"use strict";
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ProfitHeader from './ProfitHeader';
import TransactionList from './TransactionList';
import TransactionEntry from './TransactionEntry';
import GlobalNavigation from './GlobalNavigation';
import CurrentBalance from './CurrentBalance';
import Home from './Home';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ProfitHeader />
					<GlobalNavigation />
					<CurrentBalance />
					<Switch>
						<Route exact={true} path="/" component={TransactionList}/>
						<Route path="/enter-transactions" render={() => <TransactionEntry testProp="Josh" /> } />
					</Switch>
			  	</div>
			</Router>
		)
	}
}

export default App;