import { combineReducers } from "@reduxjs/toolkit";

import TableReducer from "./Slice/TableData";


const reducers = combineReducers({
    tableData : TableReducer,
})

export default reducers;