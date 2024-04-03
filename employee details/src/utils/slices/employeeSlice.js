import { createSlice } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employeeDetails: [],
        filteredEmployee: null
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
        },
        addFilteredEmployee: (state, action) => {
            state.filteredEmployee = state.employeeDetails.filter((employee) => {
                return employee.employeeId === action.payload
            })
        },
        emptyFilteredEmployee: (state) => {
            state.filteredEmployee = null
        }

    }
})

export const { addEmployeeDetails, addNewEmployee, deleteEmployee, addFilteredEmployee, emptyFilteredEmployee } = employeeSlice.actions
export default employeeSlice.reducer