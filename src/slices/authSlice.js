import {createSlice} from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        register: (state, {payload}) => {
            localStorage.setItem('user', JSON.stringify(payload))
            return state
        },
        login: (state, {payload}) => {
            let user = JSON.parse(localStorage.getItem('user')) || null
            if(user){
                if(user.username === payload.username && user.password === payload.password){
                    state.user = user
                    return
                }
            } 
            state.user = null;
            return
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const {login, logout, register} = authSlice.actions;

export const selectUser = state => state.auth.user

export default authSlice.reducer