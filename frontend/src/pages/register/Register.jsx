import React, { useContext, useEffect } from 'react'
// import noteContext from '../context/noteContext';
import './register.css'
import UserContext from '../../context/userContext/UserContext';
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';
import { useNavigate } from "react-router-dom";

const initialValues = { username: "", email: "", password: "", repeatpassword: "" };
const Register = () => {
    const context = useContext(UserContext);
    const { error, isError, register } = context;
    const Navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            // console.log(values);
            register(values.username, values.email, values.password);
            if (!isError) {
                action.resetForm();
                window.location.reload();
                Navigate('/');
            }
        }
    });
    // console.log(values);
    // console.log(errors);

    useEffect(() => {
        // eslint-disable-next-line
        if (localStorage.getItem("token")) {
            window.location.reload();
            Navigate('/');
        }
    })

    return (
        <div>
            <div className="registerForm">
                <form id="contacts" className="form" onSubmit={handleSubmit}>
                    <h2>SignUp Here</h2>
                    <div className='form-input'>
                        <p type="Username"><input type='text' id="username" name="username" placeholder="Write Your UserName.." value={values.username} onChange={handleChange} onBlur={handleBlur} ></input></p>
                        {errors.username && touched.username ? <small>{errors.username}</small> : null}
                    </div>
                    <div className='form-input'>
                        <p type="Email"><input type='email' id="email" name="email" placeholder="Write Your Email.." value={values.email} onChange={handleChange} onBlur={handleBlur} ></input></p>
                        {errors.email && touched.email ? <small>{errors.email}</small> : null}                    </div>
                    <div className="formInline">
                        <div className='form-input password'>
                            <p type="Password"><input type='password' id="password" name="password" placeholder="Write Your Password.." value={values.password} onChange={handleChange} onBlur={handleBlur}></input></p>
                            {errors.password && touched.password ? <small>{errors.password}</small> : null}                        </div>
                        <div className='form-input repeatPassword'>
                            <p type="Repeat Password"><input type='password' id="repeatpassword" name="repeatpassword" placeholder="Repeat Your Password.." value={values.repeatpassword} onChange={handleChange} onBlur={handleBlur}></input></p>
                            {errors.repeatpassword && touched.repeatpassword ? <small>{errors.repeatpassword}</small> : null} </div>
                    </div>
                    <div className="formBox">
                        {isError && error ? <small className='errDisplay'>{error}</small> : null}
                        <button type="submit" id="submit" className="submitBtn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
