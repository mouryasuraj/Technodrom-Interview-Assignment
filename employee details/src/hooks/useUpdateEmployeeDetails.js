import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowForm } from "../utils/slices/appSlice";
import { BACKEND_URL } from "../utils/constant";

const useUpdateEmployeeDetails = (updateGender) => {
    const dispatch = useDispatch()

    const filteredEmployee = useSelector(
        (store) => store.employee.filteredEmployee
    );
    const {
        employeeId,
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        addressStreet,
        addressCity,
        addressState,
        addressPostalCode,
        contactNumber,
        department,
        position,
        gender
    } = filteredEmployee[0];
    const [employeeData, setEmployeeData] = useState({
        employeeId: employeeId,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        nationality: nationality,
        addressStreet: addressStreet,
        addressCity: addressCity,
        addressState: addressState,
        addressPostalCode: addressPostalCode,
        contactNumber: contactNumber,
        department: department,
        position: position,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${BACKEND_URL}/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...employeeData, ['gender']: updateGender.current.value
            }),
        })
            .then(() => {
                dispatch(toggleShowForm())
                window.location.reload()
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setEmployeeData({
            ...employeeData,
            [e.target.name]: e.target.value,
        });
    };


    return { gender, employeeData, handleChange, handleSubmit }
}
export default useUpdateEmployeeDetails