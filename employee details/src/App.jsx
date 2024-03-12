
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeFields from "./components/EmployeeFields";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {

  return (
    <Provider store={appStore}>
      <div className="bg-slate-800 w-full min-h-screen text-slate-200 py-8">
        <Header />
        <EmployeeDetails />
        <EmployeeFields />
      </div>
    </Provider>
  );
}

export default App;
