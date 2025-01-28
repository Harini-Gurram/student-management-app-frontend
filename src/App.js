import logo from "./logo.svg";
import "./App.css";
import TableComponent from "./components/DataTable";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1>Student Data</h1>
      <ToastContainer />
      <TableComponent />
    </div>
  );
}

export default App;
