import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/firstpage/firstpage";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Forgot from "./components/login/forgotpass";
import Reset from "./components/login/resetpass";
import Home from "./components/home/home";
import Users from "./components/users/user";
import AddUsers from "./components/users/adduser";
import Employees from "./components/employees/employees";
import AddEmployee from "./components/employees/addemployee";
import EditEmployee from "./components/employees/editemployee";
import Category from "./components/category/category";
import AddCategory from "./components/category/addcategory";
import Profile from "./components/profile/profile";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "./store";
import ProtectedRoute from "./components/ProtectRoute/ProtectedRoute";
import Choose from "./components/choose/choose";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login(id));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/choose" element={<Choose />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpass" element={<Forgot />}></Route>
        <Route path="/resetpass/:id/:token" element={<Reset />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/user"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/user/add"
          element={
            <ProtectedRoute>
              <AddUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/employee"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/employee/add"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/employee/edit/:employeeId"
          element={
            <ProtectedRoute>
              <EditEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/category/add"
          element={
            <ProtectedRoute>
              <AddCategory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
