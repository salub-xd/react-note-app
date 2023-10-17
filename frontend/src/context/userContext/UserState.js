import React, { useState } from 'react'
import UserContext from './UserContext'
// import { useNavigate } from "react-router-dom";

const UserState = ({ children }) => {
    let host = 'http://localhost:5000/api/auth';
    let [myUser, setMyUser] = useState();
    let [error, setError] = useState("");
    let [isError, setIsError] = useState(true);
    // const Navigate = useNavigate();
    const register = async (username, email, password) => {
        console.log("User Register");
        try {
            const res = await fetch(`${host}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password })
            });

            const resData = await res.json();
            console.log(res);
            console.log(resData);
            if (resData.success) {
                localStorage.setItem("token", (resData.jwtToken));
                // Navigate('/');
            }

            if (res.status === 201) {
                setMyUser(resData);
                setIsError(false)
            } else if (res.status === 403 || res.status === 404) {
                setError(resData.error);
                setIsError(true)

            }
        } catch (err) {
            console.log(err);
            // setError(err);
        }
    }


    const login = async (email, password) => {
        console.log("User login");
        try {

            const res = await fetch(`${host}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const resData = await res.json();
            // console.log(res);
            // console.log(resData);
            // console.log(resData.errors[0].msg);
            if (resData.success) {
                localStorage.setItem("token", (resData.jwtToken));
                // Navigate('/'); 
            }
            if (res.status === 202) {
                setMyUser(resData);
                setIsError(false)
            } else if (res.status === 403 || res.status === 404) {
                setError(resData.error);
                setIsError(true);
            }
            // else {
            //     console.log(resData.errors[0].msg);
            //     console.log(isError);
            //     setError(resData.errors[0].msg);
            //     setIsError(prevIsError => {
            //         console.log(prevIsError); // Log the previous value of isError
            //         return true; // Set the new value of isError to true
            //     });
            // }
        } catch (err) {
            console.log(err);
            // setError(err);
        }
    }

    return (
        <div>
            <UserContext.Provider value={{ myUser, isError, error, register, login }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default UserState
