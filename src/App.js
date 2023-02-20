import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Setings/Setings";
import Conversation from "./pages/Conversation/Conversation";
import Groups from "./pages/Groups/Groups";
import Courses from "./pages/Courses/Courses";
import socket from "./server/server";
import ProfessorList from "./pages/ProfessorList/ProfessorList";
import AxiosCall from "./pages/Request/AxiosCall";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // isUnAuth
  let openPages = ["/login", "/register"];
  useEffect(() => {
    if (
      localStorage.getItem("isAuth") == null &&
      !openPages.includes(location.pathname)
    ) {
      navigate("/login");
    }
  }, [location.pathname]);

  // save User
  useEffect(() => {
    if (Cookies.get("qab_at")) {
      AxiosCall("get", "/profile/").then((data) => {
        localStorage.setItem("ud", JSON.stringify(data));
      });
    }
  }, []);

  // isOffline

  const networkError = () =>
    toast("ERR_INTERNET_DISCONNECTED", {
      className: "bg-danger text-white",
    });
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  !isOnline && networkError();
  return (
    <div>
      <ToastContainer theme="light" autoClose={5000} rtl={false} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/answer" element={<Conversation />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/" element={<Courses />} />
          <Route path="/proffessor" element={<ProfessorList />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
