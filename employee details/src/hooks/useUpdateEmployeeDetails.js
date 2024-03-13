import { useState } from "react";
import { useSelector } from "react-redux";

const useUpdateEmployeeDetails = (updateGender) => {

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
        await fetch("http://localhost:8081/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...employeeData, ['gender']: updateGender.current.value
            }),
        })
            .then((res) => {
                console.log("Data Updated Successfully " + res);
                alert("log")
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setEmployeeData({
            ...employeeData,
            [e.target.name]: e.target.value,
        });
    };


    return { employeeData, filteredEmployee, handleChange, handleSubmit }
}
export default useUpdateEmployeeDetails