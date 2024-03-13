import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showForm: false,
        updateForm: false,
    },
    reducers: {
        toggleShowForm: (state) => {
            state.showForm = !state.showForm
        },
        displayForm: (state) => {
            state.updateForm = false
        },
        toggleUpdateForm: (state) => {
            state.updateForm = !state.showForm
        }
    }
})

export const { toggleShowForm, toggleUpdateForm, displayForm } = appSlice.actions;
export default appSlice.reducer