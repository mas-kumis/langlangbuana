import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null }

const authSLice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout : (state) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    },
    
})

export const {setCredentials, logout} = authSLice.actions
export default authSLice.reducer