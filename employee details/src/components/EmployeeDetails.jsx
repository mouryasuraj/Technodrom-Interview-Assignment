import { BACKEND_URL, employeeHeader } from "../utils/constant";
import useEmployeeDetails from "../hooks/useEmployeeDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilteredEmployee,
  deleteEmployee,
} from "../utils/slices/employeeSlice";
import { toggleShowForm, toggleUpdateForm } from "../utils/slices/appSlice";

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  useEmployeeDetails();
  const employeeDetails = useSelector(
    (store) => store.employee.employeeDetails
  );

  const handleDelete = async (id) => {
    dispatch(deleteEmployee(id));
    await fetch(`${BACKEND_URL}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleUpdate = (id) => {
    dispatch(addFilteredEmployee(id));
    dispatch(toggleUpdateForm());
    dispatch(toggleShowForm());
  };

  if (!employeeDetails) return <p>Loading.....</p>;
  return (
    <div className="py-12 px-5">
      <table className="w-full">
        <thead className="bg-slate-500 border border-slate-400">
          <tr>
            {employeeHeader.map((item) => {
              return (
                <th key={item} className="px-2 py-2 text-slate-200">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="">
          {employeeDetails.map((item) => (
            <tr
              key={item.employeeId}
              className="text-md border border-slate-400 text-center even:bg-slate-900"
            >
              {Object.keys(item).map((key) => (
                <td
                  key={item[key]}
                  className="px-2 py-2 border border-slate-600"
                >
                  {item[key]}
                </td>
              ))}
              <td className="border border-slate-600">
                <span
                  onClick={() => handleUpdate(item.employeeId)}
                  title="UPDATE"
                >
                  <i className="fa-solid fa-pencil cursor-pointer hover:text-slate-400 px-2 mr-1" />
                </span>
                <span
                  onClick={() => handleDelete(item.employeeId)}
                  title="DELETE"
                >
                  <i className="fa-solid fa-trash cursor-pointer text-red-400 hover:text-red-300 px-2" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {employeeDetails.length === 0 && (
        <p className="px-4 py-5 text-center text-xl">No data available.</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
