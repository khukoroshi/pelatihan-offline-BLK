import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import DeleteStudent from "./pages/DeleteStudent";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Sistem Manajemen Siswa</h1>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/delete/:id" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
