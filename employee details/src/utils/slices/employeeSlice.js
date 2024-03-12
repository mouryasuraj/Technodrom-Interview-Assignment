import { createSlice } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employeeDetails: []
    },
    reducers: {
        addEmployeeDetails: (state, action) => {
            state.employeeDetails = action.payload
        },
        addNewEmployee: (state, action) => {
            state.employeeDetails.push(action.payload)
        },
        deleteEmployee: (state, action) => {
            state.employeeDetails = state.employeeDetails.filter((item) => {
                return item.employeeId !== action.payload
            })
        }
    }
})

export const { addEmployeeDetails, addNewEmployee, deleteEmployee } = employeeSlice.actions
export default employeeSlice.reducer