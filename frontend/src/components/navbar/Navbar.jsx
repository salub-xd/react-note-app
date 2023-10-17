import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { NavLink, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
const Navbar = () => {
    const [click, setClick] = useState(false);
    // const handleClick = ()=>{
    //   console.log("Clicked");
    //   setClick("open")
    // }
    const Navigate = useNavigate();
    const [isUserLogin, setIsUserLogin] = useState(true);
    // const [darkMode, setDarkmode] = useState(false);
    // const handleClick = () => {
    //     if (!darkMode) {
    //         document.body.style.backgroundColor = '#222831';
    //         setDarkmode(true);
    //     } else {
    //         document.body.style.backgroundColor = 'white';
    //         setDarkmode(false);
    //     }
    // }
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setIsUserLogin(!isUserLogin);
        Navigate('/login')
    }
    useEffect(() => {
        // eslint-disable-next-line
        if (localStorage.getItem('token')) {
            Navigate('/');
            setIsUserLogin(!isUserLogin);
        }
    }, [])
    return (
        <>
            <header>
                <div id="navbar" className="navbar">
                    <nav>
                        <div className="name"> <NavLink to={'/'}>wNoteApp</NavLink></div>
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/">Home</NavLink></li>
                            {/* <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/about">About</NavLink></li> */}
                            {
                                isUserLogin ? (<>
                                    <li className='signupBtn'><NavLink to="/register">Sign up</NavLink></li>
                                    <li className='loginBtn'><NavLink to="/login">Login</NavLink></li>
                                </>) : <> <li className='logoutBtn' onClick={handleLogout}><NavLink>Logout</NavLink></li></>}

                        </ul>
                        <a>
                            <div onClick={() => { setClick(!click) }} className="toggle_btn">
                                {!click}  <div className='toggleIcons'>{!click ? <HamburgerIcon boxSize={30} /> : <CloseIcon />}</div>
                            </div>
                        </a>
                    </nav>
                </div>
                <div className={click ? `dropdown_menu open` : `dropdown_menu`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        {/* <li><NavLink to="/about">about</NavLink></li> */}
                        <li><NavLink to="/register">Sign Up</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar
