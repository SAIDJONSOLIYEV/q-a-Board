import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/Login/Login.scss";
import Webcam from "react-webcam";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import AxiosCall from "../Request/AxiosCall";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const videoConstraints = {
    width: 1000,
    height: 2000,
    facingMode: "user",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [getPhoto, setGetPhoto] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };
  function loginUser() {
    let obj = {
      email,
      password,
    };
    AxiosCall("post", "/auth/login/", obj)
      .then((data) => {
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
  const notifyError = () =>
    toast(errors.join(" "), {
      className: "bg-danger text-white",
    });
  return (
    <div>
      <ToastContainer />
      {getPhoto ? (
        <Webcam
          className="d-flex justify-content-center w-100 mt-4 align-items-center"
          audio={false}
          height={400}
          screenshotFormat="image/jpeg"
          width={400}
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <button
              className="d-flex btn btn-dark m-auto mt-1  justify-content-center p-2r"
              onClick={() => {
                setImage(getScreenshot());
                setGetPhoto(false);
              }}
            >
              Capture photo
            </button>
          )}
        </Webcam>
      ) : (
        <div className="login">
          <div className="shadow-lg  cart">
            <h2>Login</h2>
           <div className="input"> 
           <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
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
            <button onClick={loginUser} className="my-3">
              Login
            </button>
            <div className="my-4 footers">
              <p>Haven't got an account?</p>
              <span onClick={() => navigate("/register")}>Register</span>
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
            <div className="login-with-cam mt-1">
              <button onClick={() => setGetPhoto(true)}>
                Login with FaceID
              </button>
            </div>
          </div>
        </div>
      )}
      <img
        className="d-flex justify-content-center m-auto  w-100"
        src={image}
        alt=""
      />
    </div>
  );
};

export default Login;
