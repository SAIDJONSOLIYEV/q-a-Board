import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/Register/Register.scss";
import { GoogleLogin } from "@react-oauth/google";
import AxiosCall from "../Request/AxiosCall";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Register = () => {
  const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };
  const navigate = useNavigate();
  const [full_name, setFull_Name] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  function registerUser() {
    if (password === cPassword) {
      let obj = {
        email,
        full_name,
        password,
      };
      AxiosCall("post", "/auth/signup/", obj)
        .then((res) => {
          notifySuccess();
          setInterval(() => {
            navigate("/login");
          }, 5000);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              errors.push(`${property}: ${error.response.data[property]}`);
              setErrors([...errors]);
            }
          } else if (error.message) {
            errors.push("Something went wrong. Please try again!");
            setErrors([...errors]);
          }
          notifyError();
        });
    }
  }
  const notifyError = () =>
    toast(errors.join(" "), {
      className: "bg-danger text-white",
    });
  const notifySuccess = () =>
    toast(
      "Almost done! You have to verify your email. Please, check your inbox!",
      {
        className: "bg-success text-white",
      }
    );
  return (
    <div className="register">
      <ToastContainer />
      <div className="shadow-lg  cart">
        <h2>Register</h2>
        <div className="input">
          <input
            onChange={(e) => setFull_Name(e.target.value)}
            value={full_name}
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div className="input">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
          />
        </div>
        <div className="input">
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type={showPass?"text":"password"}
          />
         {
            showPass? <FontAwesomeIcon
            onClick={() => setShowPass(false)}
            className="icon-eye"
            icon={faEye}
          /> :<FontAwesomeIcon
          onClick={() => setShowPass(true)}
          className="icon-eye"
          icon={faEyeSlash}
        />
         }
        </div>
        <div className="input">
          <input
            onChange={(e) => setcPassword(e.target.value)}
            placeholder="Confirm Password"
            type={showConfirmPass?"text":"password"}
          />
         {
            showConfirmPass? <FontAwesomeIcon
            onClick={() => setShowConfirmPass(false)}
            className="icon-eye"
            icon={faEye}
          /> :<FontAwesomeIcon
          onClick={() => setShowConfirmPass(true)}
          className="icon-eye"
          icon={faEyeSlash}
        />
        
         }
        </div>

        <button onClick={registerUser} className="my-3">
          Register
        </button>
        <div className="my-4 footers">
          <p>I have an account</p>
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
        <GoogleLogin
          onSuccess={(res) => {
            let obj = {
              id_token: res.credential,
            };
            AxiosCall("post", "/auth/google/", obj).then((data) => {
              navigate("/");
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + data.tokens.access;
              setCookie("qab_at", data.tokens.access, 1);
              Cookies.set("qab_rt", data.tokens.refresh, { expires: 7 });
              localStorage.setItem(
                "shouldRefreshAt",
                new Date().getTime() + 55 * 60 * 1000
              );
              localStorage.setItem("isAuth", "true");
            });
          }}
          onError={(err) => {
            console.log(err);
          }}
        />
      </div>
    </div>
  );
};

export default Register;
