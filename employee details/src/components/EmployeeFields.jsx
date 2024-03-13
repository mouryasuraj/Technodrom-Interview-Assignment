
import useEmployeeFields from "../hooks/useEmployeeFilelds";
import NewEmployeeForm from "./NewEmployeeForm";
import UpdateEmployeeDetails from "./UpdateEmployeeDetails";

const EmployeeFields = () => {
  const { showForm, updateForm, handleCloseForm } = useEmployeeFields();

  return (
    <div
      className={`absolute w-full h-screen bg-black top-0 left-0 bg-opacity-70 ${
        showForm ? "block" : "hidden"
      }`}
    >
      <div className="relative w-[700px] m-auto mt-20 bg-slate-100 text-slate-900 p-5 rounded-lg z-[2]">
        <i
          onClick={handleCloseForm}
          className="fa-solid fa-xmark absolute top-[-45px] right-[-45px] px-[15px] text-xl py-2 hover:bg-red-500 transition-all duration-200 rounded-full text-slate-100 cursor-pointer *:"
        />
        {updateForm ? <UpdateEmployeeDetails /> : <NewEmployeeForm />}
      </div>
    </div>
  );
};

export default EmployeeFields;
