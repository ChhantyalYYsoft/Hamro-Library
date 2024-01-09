import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clientList: {},
}

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setClientList: (state, action) => {
            state.clientList = action.payload
        }
    }
})

export const { setClientList } = clientSlice.actions

export default clientSlice.reducer