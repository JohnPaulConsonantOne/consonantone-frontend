import { combineReducers } from "redux"
import { bookRecordReducer } from "./bookRecordReducer"


const combineBookStores = combineReducers({
    books: bookRecordReducer
})

export default combineBookStores