import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import StudentRegister from "./components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import McqTest from "./components/McqTest";
import CodingTest from "./components/CodingTest";

function App() {
  return (    

    <Router>
      <Routes>
          <Route path="/"  exact element={<Dashboard />} />
          <Route path="/TeacherRegister" exact  element={<TeacherRegister />} />
          <Route path="/StudentRegister" exact element={<StudentRegister /> } /> 
          <Route path="/TeacherLogin" exact element={<TeacherLogin />} />
          <Route path="/StudentLogin" exact element={<StudentLogin /> } />
          <Route path="/StudentDashboard" exact element={< StudentDashboard/>} />
          <Route path="/TeacherDashboard" exact element={<TeacherDashboard /> } />
          <Route path="/StudentDashboard/McqTest" exact element={<McqTest /> } />
          <Route path="/StudentDashboard/CodingTest" exact element={<CodingTest /> } />
      </Routes>
    </Router>

  );
}

export default App;
