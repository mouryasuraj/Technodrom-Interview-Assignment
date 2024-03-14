import { useRef } from "react";
import useEmployeeFields from "../hooks/useEmployeeFilelds";

const NewEmployeeForm = () => {
  const gender = useRef();
  const { handleSubmit, handleOnchange } = useEmployeeFields(gender);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label className="font-semibold text-lg" htmlFor="employeeID">
        Fill Employee details
      </label>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleOnchange}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleOnchange}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            name="dateOfBirth"
            type="date"
            required
            onChange={handleOnchange}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="nationality"
            placeholder="Nationality"
            required
            onChange={handleOnchange}
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Gender: </p>
          <select ref={gender} className="border-2 border-slate-500 px-1 py-1">
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="addressStreet"
            placeholder="Street"
            required
            onChange={handleOnchange}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="addressCity"
            placeholder="City"
            required
            onChange={handleOnchange}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="addressState"
            placeholder="State"
            required
            onChange={handleOnchange}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="addressPostalCode"
            placeholder="Postal Code"
            required
            onChange={handleOnchange}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="number"
            name="contactNumber"
            placeholder="Contact Number"
            required
            onChange={handleOnchange}
          />
          <input
            className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
            type="text"
            name="department"
            placeholder="Department"
            required
            onChange={handleOnchange}
          />
        </div>
        <input
          className="w-full px-2 py-2 outline-none border-slate-500 border-2 rounded-sm focus:border-slate-600 focus:border-[3px]"
          type="text"
          name="position"
          placeholder="Position"
          required
          onChange={handleOnchange}
        />
      </div>
      <button className="bg-green-700 hover:bg-green-600 transition-all duration-200 text-slate-100 py-2 rounded-lg text-xl mt-2">
        <i className="fa-solid fa-plus" />
        &nbsp;ADD
      </button>
    </form>
  );
};

export default NewEmployeeForm;
