import {
  faArrowLeft,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import AxiosCall from "../Request/AxiosCall";
import "./scss/Courses.scss";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [Allcourses, setAllCourses] = useState([]);
  const [searched, setSearched] = useState([]);
  const [enrollToNewCourse, setEnrollToNewCourse] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getStudentCourse();
  }, []);
  function getStudentCourse() {
    AxiosCall("get", "/course/").then((data) => {
      setCourses(data);
    });
  }
  function addCourse() {
    setSearchInput("");
    setEnrollToNewCourse(true);
    AxiosCall("get", "/course/explore/").then((data) => {
      setAllCourses(data);
    });
  }
  useEffect(() => {
    if (searchInput !== "") {
      AxiosCall("get", "/course/?search=" + searchInput).then((data) => {
        setSearched(data);
      });
    } else {
      setSearched([]);
    }
  }, [searchInput]);
  return (
    <>
      {courses.length > 1 ? (
        <div className="student-courses">
          <div className="top-side">
            <span className="courses-text">
              {enrollToNewCourse ? (
                <span className="new-course">
                  {enrollToNewCourse && (
                    <FontAwesomeIcon
                      className="back-icon"
                      onClick={() => setEnrollToNewCourse(false)}
                      icon={faArrowLeft}
                    />
                  )}
                  New Courses
                </span>
              ) : (
                "My courses"
              )}
            </span>
            <div className="search-bar">
              <div className={"search-container"}>
                <form className="form">
                  <button>
                    <svg
                      width="17"
                      height="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="search"
                    >
                      <path
                        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                        stroke="currentColor"
                        strokeWidth="1.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <input
                    className="input"
                    placeholder="Search for messages or users..."
                    required=""
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                  />
                  <button className="reset" type="reset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            {!enrollToNewCourse && (
              <div onClick={addCourse} className="add-course">
                <span>+Explore new course</span>
              </div>
            )}
          </div>
          <div className="courses-list">
            {searchInput
              ? searched.map((item) => (
                  <div key={item.id} className="course-card" onClick={() => {}}>
                    <div className="proffeser">
                      <div className="image">
                        <img
                          alt="proffesor-img"
                          className="image"
                          src={item.professor.image}
                        />
                      </div>
                      <span>{item.professor.full_name}</span>
                    </div>
                    <span className="name">name: {item.name}</span>
                    <span className="semester">semester: {item.semester}</span>
                    <span className="started_at">
                      started_at: {item.started_at}
                    </span>
                    <span className="students">students: {item.students}</span>
                    <span className="students">
                      given question: {item.given_questions}
                    </span>
                    <span className="bottom-button">Inpogress</span>
                  </div>
                ))
              : !enrollToNewCourse
              ? courses.map((item) => (
                  <div key={item.id} className="course-card" onClick={() => {}}>
                    <div className="proffeser">
                      <div className="image">
                        <img
                          alt="proffesor-img"
                          className="image"
                          src={item.professor.image}
                        />
                      </div>
                      <span>{item.professor.full_name}</span>
                    </div>
                    <span className="name">name: {item.name}</span>
                    <span className="semester">semester: {item.semester}</span>
                    <span className="started_at">
                      started_at: {item.started_at}
                    </span>
                    <span className="students">students: {item.students}</span>
                    <span className="students">
                      given question: {item.given_questions}
                    </span>
                    <span className="bottom-button">Inpogress</span>
                  </div>
                ))
              : Allcourses.map((item) => (
                  <div key={item.id} className="course-card">
                    <div className="proffeser">
                      <div className="image">
                        <img
                          alt="proffesor-img"
                          className="image"
                          src={item.professor.image}
                        />
                      </div>
                      <span>{item.professor.full_name}</span>
                    </div>
                    <span className="name">name: {item.name}</span>
                    <span className="semester">semester: {item.semester}</span>
                    <span className="started_at">
                      started_at: {item.started_at}
                    </span>
                    <span className="students">students: {item.students}</span>
                    <span className="bottom-button">Enroll</span>
                  </div>
                ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Courses;
