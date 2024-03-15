import { useDispatch, useSelector } from "react-redux";
import { toggleShowForm } from "../utils/slices/appSlice";
import { useState } from "react";
import { BACKEND_URL } from "../utils/constant";

const useEmployeeFields = (gender) => {
    const [employee, setEmployee] = useState([]);
    const dispatch = useDispatch();
    const showForm = useSelector((store) => store.app.showForm);
    const updateForm = useSelector((store) => store.app.updateForm);


    const handleCloseForm = () => {
        dispatch(toggleShowForm());
        if (updateForm) {
            window.location.reload()
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${BACKEND_URL}/newEmployee`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...employee, ["gender"]: gender.current.value }),
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        handleCloseForm();
        e.target.reset()
        window.location.reload()
    };

    const handleOnchange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    return { showForm, updateForm, handleSubmit, handleOnchange, handleCloseForm }
}

export default useEmployeeFields;