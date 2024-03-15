import { useEffect, useRef } from "react";
import useUpdateEmployeeDetails from "../hooks/useUpdateEmployeeDetails";

const UpdateForm = () => {
  const updateGender = useRef();

  const { gender, employeeData, handleChange, handleSubmit } =
    useUpdateEmployeeDetails(updateGender);

  useEffect(() => {
    updateGender.current.value = gender;
  }, [gender]);

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
      <label className="font-semibold text-lg" htmlFor="employeeID">
        Update Employee Details
      </label>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            value={employeeData.firstName}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
            value={employeeData.lastName}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            name="dateOfBirth"
            type="date"
            required
            onChange={handleChange}
            value={employeeData.dateOfBirth}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="nationality"
            placeholder="Nationality"
            required
            onChange={handleChange}
            value={employeeData.nationality}
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Gender: </p>
          <select
            ref={updateGender}
            className="border-2 border-slate-500 px-1 py-1"
          >
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="addressStreet"
            placeholder="Street"
            required
            onChange={handleChange}
            value={employeeData.addressStreet}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="addressCity"
            placeholder="City"
            required
            onChange={handleChange}
            value={employeeData.addressCity}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="addressState"
            placeholder="State"
            required
            onChange={handleChange}
            value={employeeData.addressState}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="addressPostalCode"
            placeholder="Postal Code"
            required
            onChange={handleChange}
            value={employeeData.addressPostalCode}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            required
            onChange={handleChange}
            value={employeeData.contactNumber}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
            type="text"
            name="department"
            placeholder="Department"
            required
            onChange={handleChange}
            value={employeeData.department}
          />
        </div>
        <input
          className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm"
          type="text"
          name="position"
          placeholder="Position"
          required
          onChange={handleChange}
          value={employeeData.position}
        />
      </div>
      <button className="bg-green-700 hover:bg-green-600 transition-all duration-200 text-slate-100 py-2 rounded-lg text-xl mt-2">
        <i className="fa-solid fa-pen" />
        &nbsp;UPDATE
      </button>
    </form>
  );
};

export default UpdateForm;
