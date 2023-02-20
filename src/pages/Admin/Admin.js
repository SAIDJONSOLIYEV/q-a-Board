import React, { useEffect, useState } from "react";
import "../../pages/Admin/Admin.scss";
import Select from "react-select";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import edit from "../../images/edit.png";
import deletes from "../../images/delete.png";

const Admin = () => {
    const [modalvisible, setModalvisible] = useState(false);
    const [professors, setProfessors] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currenntProfessor, setCurrenntProfessor] = useState("");
    const [students, setStudents] = useState([]);

    function handleSelect() { }

    function addProfessor(e) {
        e.preventDefault();
        let obj = {
            name,
            email,
            password,
        };
        if (currenntProfessor === "") {
            professors.push(obj);
        } else {
            professors[currenntProfessor] = obj;
            setCurrenntProfessor("");
        }
        setModalvisible(false);
        setProfessors([...professors]);
    }

    useEffect(() => {
        if (!modalvisible) {
            setName("");
            setEmail("");
            setPassword("");
        }
    }, [modalvisible]);
    function editProfessor(item) {
        setCurrenntProfessor(item);
        setName(item.name);
        setEmail(item.email);
        setPassword(item.password);
        setModalvisible(true);
    }
    function deleteProfessor(index) {
        professors.splice(index, 1);
        setProfessors([...professors]);
    }

    function deleteStudent() {

    }
    const [courses, setCourses] = useState([
        { label: "Java", value: "Java" },
        { label: "Phyton", value: "alik" },
        { label: "ReactJs", value: "alik" },
        { label: "Bootstrap", value: "alik" },
        { label: "Typscript", value: "alik" },
        { label: "Git", value: "alik" },
    ]);
    return (
        <div className="admin ">
            <div className="courses">
                <h1>Courses</h1>
                <Select
                    onChange={handleSelect}
                    options={courses.map((item) => ({
                        label: item.label,
                        value: item.value,
                    }))} x
                />
            </div>
            <div className="professors">
                <h2>Professors</h2>
                <div className="professor-header">
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Search.."
                    />
                    <button
                        onClick={() => setModalvisible(true)}
                        className="btn btn-info form control my-2 text-white"
                    >
                        ADD NEW PROFESSOR
                    </button>
                </div>
                <Rodal
                    height={400}
                    visible={modalvisible}
                    onClose={() => setModalvisible(false)}
                >
                    <h3>Create New Professor</h3>
                    <form onSubmit={addProfessor}>
                        <input
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className="form-control my-4"
                            type="text"
                        />
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="form-control my-4"
                            type="text"
                        />
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="form-control my-4"
                            type="password"
                        />
                        <button className="btn btn-info text-white">Add Professor</button>
                    </form>
                </Rodal>
                <div className="professor-names">
                    {professors.map((item, index) => (
                        <div key={item.id} className="cruds">
                            <span>{item.name}</span>
                            <div className="btns">
                                <button onClick={() => editProfessor(item)} className="edits">
                                    <img src={edit} alt="" />
                                </button>
                                <button
                                    onClick={() => deleteProfessor(index)}
                                    className="deletes"
                                >
                                    <img src={deletes} alt="" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="students">
                <h2>Students</h2>
                <div className="student-header">
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Search.."
                    />

                </div>

                <div className="student-names">

                    <div className="cruds">
                        <span>Saidjon</span>
                        <div className="btns">
                            <button
                                onClick={() => deleteStudent()}
                                className="deletes"
                            >
                                <img src={deletes} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="cruds">
                        <span>Saidjon</span>
                        <div className="btns">
                            <button
                                onClick={() => deleteStudent()}
                                className="deletes"
                            >
                                <img src={deletes} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="cruds">
                        <span>Saidjon</span>
                        <div className="btns">
                            <button
                                onClick={() => deleteStudent()}
                                className="deletes"
                            >
                                <img src={deletes} alt="" />
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Admin;
