import React, { useEffect, useState } from 'react';
import "../../pages/Setings/Setings.scss"
import select from "../../images/select.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AxiosCall from '../Request/AxiosCall';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Setings = () => {

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [img, setImg] = useState('')
    const [user,setuser]=useState(JSON.parse(localStorage.getItem("ud"))==null?{}:JSON.parse(localStorage.getItem("ud")))
    function handleFile(e) {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
       }
    } 
    return (
        <div>
            <div className='setings'>
               <div className='d-flex  gap-4'>
          <Link to={'/'}>
          <FontAwesomeIcon style={{cursor:"pointer"}}  className="text-dark"  icon={faArrowLeft} size="2xl"/></Link>
               <h2>Profile Settings</h2>
               </div>
                <div className='blocks'>
                    <div className='block1'>
                        Photo
                        <label className='form-control select-photo'>
                            {img ? (
                                <img className='select' width={70} src={img} alt="" />
                            ) : (<img className='user-photo' src={select} width={70} alt="" />)
                            }
                            <p>Choose your profile photo</p>
                            <input onChange={handleFile} type="file" className='d-none' />
                        </label>
                        <label>
                            Name
                            <input onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control my-4' type="text" />
                        </label>
                        <label>
                            Email
                            <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control my-4' type="text" />
                        </label>
                        <button className='btn btn-info text-white form-control my-1'>Save Settings</button>
                    </div>
                    <div className='block2'>
                        <div className=' box1'>
                            <label>
                                Current Password
                                <input placeholder='Current Password' className='form-control my-4' type="password" />
                            </label>
                            <label>
                                New Password
                                <input placeholder='New Password' className='form-control my-4' type="password" />
                            </label>
                            <label>
                                Password Confirmation
                                <input placeholder='Password Confirmation' className='form-control my-4' type="password" />
                            </label>
                            <button className='btn btn-info text-white form-control my-1'>Change Password</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setings;
