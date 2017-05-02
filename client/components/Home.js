import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserTestName, getProperties, updateMessage } from '../actions/property-actions';

@connect((store) => {
	return {
		testName: store.user.testName,
		properties: store.user.properties,
		message: store.user.message
	}
})

class Home extends React.Component {

	constructor() {
		super();
	    this.setMessage = this.setMessage.bind(this);
	    this.getProperties = this.getProperties.bind(this);
	    this.updateMessage = this.updateMessage.bind(this);
	}
	
	componentWillMount() {

	}
	
	setMessage() {
		this.props.dispatch(setUserTestName("Impressed!"));
	}

	getProperties() {
		this.props.dispatch(getProperties());
	}

	updateMessage(event) {
		let value = event.target.value
		this.props.dispatch(updateMessage(value));
	}
	
	render() {
		// const {properties} = this.props;
		// var properties = this.props.properties.data;
		var properties = this.props.properties.data;
		// var message = this.props.message;

		// console.log("Render:--------");
		// console.log("this.props: ",this.props);
		// console.log("properties",properties);

		if(!properties.length) {
			return (
				<div>
					<h1>No Properties Here.</h1>
					<h2>{this.props.message}</h2>
					<h2 onClick={this.getProperties}>View Properties</h2>		
					
				</div>
			)
		}

		const mappedProperties = properties.map((property, id) => <li key={id}>{property.property_name}</li>)

		return (
			<div>
				<h1 onClick={this.setMessage}>Wendy is very...{this.props.message}</h1>
				<ul>
					{mappedProperties}
				</ul>
				<input onChange={this.updateMessage} type="text" value={this.props.message} />
			</div>
		);
	}
}

export default Home;