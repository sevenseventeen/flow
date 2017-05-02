import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));







// const reducers = combineReducers({
// 	user: userReducer
// });



// store.subscribe(() => {
// 	console.log("Store Changed", store.getState());
// });

// store.dispatch({
// 	type: "FETCH_USERS",
// 	payload: axios.get("/api/properties")
// });




