import * as Yup from 'yup';


export const RegisterUpSchema =  Yup.object({

    name:               Yup.string().min(2).max(30).required("please enter your name"),
    email:              Yup.string().email().required("please enter your email"),
    password:           Yup.string().min(6).max(15).required("please enter your password"),
    confirm_password:   Yup.string().oneOf([Yup.ref('password'),null],"password and confirm password are not match").required("please enter your password"),

});