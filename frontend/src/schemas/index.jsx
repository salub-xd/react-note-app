import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email."),
    password: Yup.string().min(4).max(20).required("Please Enter Your Password.")
});

export const signUpSchema = Yup.object({
    username: Yup.string().min(4).max(16).required("Please Enter Your Username."),
    email: Yup.string().email().required("Please Enter Your Email."),
    password: Yup.string().min(4).max(20).required("Please Enter Your Password."),
    repeatpassword: Yup.string().required("Repeat Your Password.").oneOf([Yup.ref('password'), null], "Password Must Match.")
});