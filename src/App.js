import { Route, Routes } from "react-router-dom";
import AddEmploye from "./components/AddEmploye";
import EditEmploye from "./components/EditEmploye";
import Employelist from "./components/Employelist";

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <Routes>
              <Route path="/" element={<Employelist />} />
              <Route path="/addemploye" element={<AddEmploye />} />
              <Route path="/editemploye/:id" element={<EditEmploye />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
