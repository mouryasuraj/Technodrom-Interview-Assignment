import { useDispatch } from "react-redux";
import { displayForm, toggleShowForm } from "../utils/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleAddEmployee = () => {
    dispatch(displayForm());
    dispatch(toggleShowForm());
  };
  return (
    <div className="flex items-center gap-5">
      <h1 className="mx-5 py-1 text-2xl border-b-2 w-fit font-bold">
        Employee Details
      </h1>
      <button
        onClick={handleAddEmployee}
        className="bg-slate-500 hover:bg-slate-600 transition-all duration-200 px-4 py-2 text-xl rounded-lg cursor-pointer"
      >
        <i className="fa-solid fa-plus" /> Add New Employee
      </button>
    </div>
  );
};

export default Header;
