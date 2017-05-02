import axios from "axios";

// export function fetchUser () {
// 	return function (dispatch) {
// 		type: "FETCH_USERS",
// 		payload: axios.get("/api/properties")
// 	}
// }

export function updateFormValue(inputName, inputValue) {
	return {
		type: "UPDATE_FORM_VALUE",
		payload: {
			inputName: inputName,
			inputValue: inputValue
		}
  	}
}

export function fetchUser() {
	return {
		type: "FETCH_USER_FULFILLED",
		payload: {
			testName: "JK Fulfilled"
		}
  	}
}

export function setUserTestName(newName) {
	return {
		type: "SET_TEST_USER_NAME",
		payload: newName
  	}
}

export function updateMessage(newMessage) {
	return {
		type: "UPDATE_MESSAGE",
		payload: newMessage
  	}
}

export function getProperties() {
	return function(dispatch) {
		dispatch({
			type: "GET_PROPERTIES",
			payload: axios.get('/api/get/properties')
		})
	}
}



// payload: {
//   name: "Will",
//   age: 35,
// }