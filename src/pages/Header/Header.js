import React, { useEffect, useRef, useState } from 'react';
import "../../pages/Header/Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faPenToSquare, faLock, faQuestion, faOutdent, faQuestionCircle, faRightToBracket, faCommentDollar, faUserDoctor, faGroupArrowsRotate, faUserGroup, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import profileImg from "../../images/profile.png"
import logo from "../../images/logo.png"
import { useNavigate, useOutletContext } from 'react-router-dom';
import "rodal/lib/rodal.css"
import burger from "../../images/burger.png"
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import avatar from '../../images/avatar.png'
const Header = ({props}) => {
  const ref = useRef(null);
  const navigate = useNavigate()
  const [showProfileSetting, setShowProfileSetting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showSider, setShowSider] = useState(false)
  const notification = useSelector(state => state.notifications);
  const [user,setuser]=useState(JSON.parse(localStorage.getItem("ud"))==null?{}:JSON.parse(localStorage.getItem("ud")))
  function profile() {
    navigate("/settings")
    setShowProfileSetting(false)
  }
  function logOut() {
    Cookies.remove("qab_at")
    localStorage.clear()
    Cookies.remove("qab_rt")
    navigate("/login")
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowProfileSetting(false)
        setShowSider(false)
        setShowNotification(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div>
      <div className='header'>
        <div className='left-side'>
          <img className='logo' src={logo} alt="" />
          <div className='brend-name'>
          Q&A Board
          </div>
        </div>
        <div className='right-side'>
          <button className="notification" onClick={() => setShowNotification(true)}>
            <FontAwesomeIcon icon={faBell} className={"icon"} />
            <span className="span">
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <div onClick={() => setShowProfileSetting(true)} className='user'>
            <div className='user-img'>
              <img src={user?.image?user.image:avatar} alt="" />
            </div>
            <div className='user-info'>
              <h4 className='name'>{user?.full_name}</h4>
              <p className='profession'>{user?.role}</p>
            </div>
          </div>

        </div>
      </div>
      {
        showProfileSetting && <div className='profilesettings' ref={ref}>
          <div onClick={profile} className='icon'>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </div>
          <div onClick={logOut} className='icon'>
            <FontAwesomeIcon icon={faRightToBracket} />
            <span>Log Out</span>
          </div>
        </div>
      }
      {
        showNotification && <div className='notifications' ref={ref}>
          <span className='text'>Notifications</span>
          {/* {
            .map(item => <div className='each-notification'>
              <span>{item.text}</span>
              <div className='btns'>
                <button className='accept'>Accept</button>
                <button className='reject'>Reject</button>
              </div>
            </div>)
          } */}
          {/* <div className='each-notification'>

            <div className='times'>
              <span>16/02/2023</span>
              <span>09:41</span>
            </div>
          </div>
          <div className='each-notification'>
            <span>Hello World</span>
            <div className='btns'>
              <button className='accept'>Accept</button>
              <button className='reject'>Reject</button>
            </div>
            <div className='times'>
              <span>16/02/2023</span>
              <span>09:41</span>
            </div>
          </div> 
          <div className='each-notification'>
            <span>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</span>
            <div className='btns'>
              <button className='accept'>Accept</button>
              <button className='reject'>Reject</button>
            </div>
            <div className='times'>
              <span>16/02/2023</span>
              <span>09:41</span>
            </div>
          </div> */}
        </div>
      }


    </div>
  );
}

export default Header;
