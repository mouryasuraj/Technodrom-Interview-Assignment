import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showForm: false
    },
    reducers: {
        toggleShowForm: (state) => {
            state.showForm = !state.showForm
        }
    }
})

export const { toggleShowForm } = appSlice.actions;
export default appSlice.reducer