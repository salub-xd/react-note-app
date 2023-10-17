import React, { useContext, useEffect } from 'react'
import './login.css'
import UserContext from '../../context/userContext/UserContext';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import { useNavigate } from "react-router-dom";

const initialValues = { email: '', password: "" };
const Login = () => {
    const Navigate = useNavigate();
    const context = useContext(UserContext);
    const { error, isError, login } = context;

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            // console.log(values);
            login(values.email, values.password);
            if (!isError) {
                action.resetForm();
                window.location.reload();
                Navigate('/');
            }
        }
    });

    useEffect(() => {
        // eslint-disable-next-line
        if (localStorage.getItem("token")) {
            window.location.reload();
            Navigate('/');
        }
    })
    return (
        <div>
            <div className="loginForm">
                <form id="contacts" className="form" onSubmit={handleSubmit}
                >
                    <h2>Login Here</h2>
                    <div className='form-input'>
                        <p type="Email"><input type='email' my id="email" name="email" placeholder="Write Your Email.." value={values.email} onChange={handleChange} onBlur={handleBlur} ></input></p>
                        {errors.email && touched.email ? <small>{errors.email}</small> : null}
                    </div>
                    <div className='form-input'>
                        <p type="Password"><input type='password' id="password" name="password" placeholder="Write Your Password.." value={values.password} onChange={handleChange} onBlur={handleBlur} ></input></p>
                        {errors.password && touched.password ? <small>{errors.password}</small> : null}
                    </div>
                    <div className="formBox">
                        {isError && error ? <small className='errDisplay'>{error}</small> : <small className='none'></small>}
                        <button type="submit" id="submit" className="submitBtn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
