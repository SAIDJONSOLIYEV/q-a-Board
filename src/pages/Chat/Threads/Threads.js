import React, { useEffect, useState } from 'react'
import './scss/Threads.scss'
function Threads({ props }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectFromTheads, setSelectFromTheads] = useState(localStorage.getItem("selectFromTheads"))
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={selectFromTheads && windowWidth < 950 ? 'd-none ' : ' threads-container'}>
            <div className={"search-container"}>
                <form className="form">
                    <button>
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" placeholder="Search for messages or users..." required="" type="text" />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>
            </div>
            <div className='users-chats'>
                <div className='user-card' onClick={() => localStorage.setItem("selectFromTheads", "test")}>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="user-image" />
                    </div>
                    <div className='user-infos'>
                        <div className='name'>
                            <span>Abdurakhmonov Sharif</span>
                        </div>
                        <div className='last-message'>
                            <span>bissmillah allohu akbar</span>
                        </div>
                    </div>
                    <div className='last-time'>
                        <span>03:20 PM</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Threads