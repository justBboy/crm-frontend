import {createSlice} from '@reduxjs/toolkit';

export const tableSlice = createSlice({
    name: 'events',
    initialState: {
        data: [],
        textAreaFields: ["note"],
        dateFields: ["date", "start_date", "end_date"]
    },
    reducers: {
        getData: (state, {payload}) => {
            state.data = payload
        },
        addData: (state, {payload}) => {
            state.push(payload)
        },
    }
})

export const {getData} = tableSlice.actions;

export const selectTableData = state => state.table.data
export const selectTextAreaFields = state => state.table.textAreaFields
export const selectDateFields = state => state.table.dateFields

export default tableSlice.reducer