import { employeeHeader } from "../utils/constant";
import useEmployeeDetails from "../hooks/useEmployeeDetails";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../utils/slices/employeeSlice";

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  useEmployeeDetails();
  const employeeDetails = useSelector(
    (store) => store.employee.employeeDetails
  );

  const handleDelete = (id) => {
    console.log('Deleted');
    dispatch(deleteEmployee(id));
  };

  if (!employeeDetails) return <p>Loading.....</p>;
  return (
    <div className="py-12 px-5">
      <table>
        <thead className="bg-slate-500 border border-slate-400">
          <tr>
            {employeeHeader.map((item) => {
              return (
                <th key={item} className="px-2 py-2">
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
              className="text-md border border-slate-400"
            >
              <td className="px-2 py-2">{item.employeeId}</td>
              <td className="px-2 py-2">{item.firstName}</td>
              <td className="px-2 py-2">{item.lastName}</td>
              <td className="px-2 py-2">{item.dateOfBirth}</td>
              <td className="px-2 py-2">{item.gender}</td>
              <td className="px-2 py-2">{item.nationality}</td>
              <td className="px-2 py-2">{item.addressStreet}</td>
              <td className="px-2 py-2">{item.addressCity}</td>
              <td className="px-2 py-2">{item.addressState}</td>
              <td className="px-2 py-2">{item.addressPostalCode}</td>
              <td className="px-2 py-2">{item.contactNumber}</td>
              <td className="px-2 py-2">{item.department}</td>
              <td className="px-2 py-2">{item.position}</td>
              <td className="flex items-center justify-evenly mt-[6px]">
                <span title="Edit">
                  <i className="fa-solid fa-pencil cursor-pointer hover:text-slate-400" />
                </span>
                <span
                  onClick={() => handleDelete(item.employeeId)}
                  title="Delete"
                >
                  <i className="fa-solid fa-trash cursor-pointer hover:text-slate-400" />
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
