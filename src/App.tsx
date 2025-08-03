import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import Home from "./pages/dashboards/admin/home/Home";
import Employees from "./pages/dashboards/admin/employees/Employees";
import LeaveRequest from "./pages/dashboards/admin/leave_request/LeaveRequest";
import Documents from "./pages/dashboards/admin/documents/Documents";
import AdminDashboard from "./pages/dashboards/admin/AdminDashboard";
import EmployeeDashboard from "./pages/dashboards/employee/EmployeeDashboard";
import EmployeeHome from "./pages/dashboards/employee/home/EmployeeHome";
import EmployeeLeaveRequest from "./pages/dashboards/employee/leave_request/EmployeeLeaveRequest";
import EmployeeDocuments from "./pages/dashboards/employee/documents/EmployeeDocuments";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="leave-request" element={<LeaveRequest />} />
          <Route path="documents" element={<Documents />} />
        </Route>

        {/* Employee Dashboard */}
        <Route path="/employee/dashboard" element={<EmployeeDashboard />}>
          <Route index element={<EmployeeHome />} />
          <Route path="leave-request" element={<EmployeeLeaveRequest />} />
          <Route path="documents" element={<EmployeeDocuments />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
