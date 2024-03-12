import { useDispatch, useSelector } from "react-redux";
import { toggleShowForm } from "../utils/slices/appSlice";
import { useRef, useState } from "react";
import { addNewEmployee } from "../utils/slices/employeeSlice";

const EmployeeFields = () => {
  const [employee, setEmployee] = useState([]);
  const gender = useRef();
  const dispatch = useDispatch();
  const showForm = useSelector((store) => store.app.showForm);
  const handleCloseForm = () => {
    dispatch(toggleShowForm());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewEmployee({ ...employee, ["gender"]: gender.current.value }));
    handleCloseForm();
  };

  const handleOnchange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`absolute w-full h-screen bg-black top-0 left-0 bg-opacity-70 ${
        showForm ? "z-[1]" : "z-[-1]"
      }`}
    >
      <div className="relative w-[700px] m-auto mt-20 bg-slate-100 text-slate-900 p-5 rounded-lg z-[2]">
        <i
          onClick={handleCloseForm}
          className="fa-solid fa-xmark absolute top-[-45px] right-[-45px] px-[15px] text-xl py-2 hover:bg-red-500 transition-all duration-200 rounded-full text-slate-100 cursor-pointer *:"
        />
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <label className="font-semibold text-lg" htmlFor="employeeID">
            Fill up the details
          </label>
          <div className="flex flex-col gap-4">
            <input
              className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              required
              onChange={handleOnchange}
            />
            <div className="flex gap-2">
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={handleOnchange}
              />
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="flex gap-2">
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                name="dateOfBirth"
                type="date"
                required
                onChange={handleOnchange}
              />
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="nationality"
                placeholder="Nationality"
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="flex items-center gap-2">
              <p>Gender: </p>
              <select
                ref={gender}
                className="border-2 border-slate-500 px-1 py-1"
              >
                <option disabled value="select">
                  select
                </option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex gap-2">
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="addressStreet"
                placeholder="Street"
                required
                onChange={handleOnchange}
              />
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="addressCity"
                placeholder="City"
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="flex gap-2">
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="addressState"
                placeholder="State"
                required
                onChange={handleOnchange}
              />
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="addressPostalCode"
                placeholder="Postal Code"
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="flex gap-2">
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="number"
                name="contactNumber"
                placeholder="Contact Number"
                required
                onChange={handleOnchange}
              />
              <input
                className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
                type="text"
                name="department"
                placeholder="Department"
                required
                onChange={handleOnchange}
              />
            </div>
            <input
              className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
              type="text"
              name="position"
              placeholder="Position"
              required
              onChange={handleOnchange}
            />
          </div>
          <button className="bg-green-700 hover:bg-green-600 transition-all duration-200 text-slate-100 py-2 rounded-lg text-xl mt-2">
            <i className="fa-solid fa-plus" />
            &nbsp;Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeFields;
