import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Correctly retrieve authData from AuthContext
  const [authData] = useContext(AuthContext); // Fixed this line

  // Load logged-in user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUserRole(storedUser.role);
      if (storedUser.role === "employees" && authData) {
        const employee = authData.employees.find((e) => e.email === storedUser.email);
        setLoggedInUser(employee);
      } else {
        setLoggedInUser(storedUser);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@nishikant.com" && password === "123") {
      const admin = { role: "admin", email };
      setUserRole("admin");
      setLoggedInUser(admin);
      localStorage.setItem("loggedInUser", JSON.stringify(admin));
    } else if (authData) {
      const employee = authData.employees.find((e) => email === e.email && e.password === password);
      if (employee) {
        const employeeData = { role: "employees", email: employee.email };
        setUserRole("employees");
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!userRole ? (
        <Login handleLogin={handleLogin} />
      ) : userRole === "admin" ? (
        <AdminDashboard changeUser={setUserRole} onLogout={handleLogout} />
      ) : userRole === "employees" ? (
        <EmployeeDashboard changeUser={setUserRole} data={loggedInUser} onLogout={handleLogout} />
      ) : (
        "Something went wrong!"
      )}
    </>
  );
}

export default App;
