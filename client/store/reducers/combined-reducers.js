import { combineReducers } from "redux"
import transactions from "./transactions-reducer";
import forms from "./form-reducer";
import profit from "./profit-reducer";

export default combineReducers({
  transactions,
  forms,
  profit
})
