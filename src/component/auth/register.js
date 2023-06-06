import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../comman/input';
import './style.css';
import { useFormik } from 'formik';
import {RegisterUpSchema} from '../../schemas/register';

const initialValues =  {
    name : "",
    email: "",
    password: "",
    confirm_password: ""
};


const Register = () => {
    
    const { values, errors, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema:RegisterUpSchema,
        onSubmit: (Values) => {
            console.table(Values);
        }
        
    });
    const [DataValues,SetDataValues] = React.useState(values);
    console.table(DataValues);
    return (
        <section className="vh-100" style={{backgroundColor:'#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}> 
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                <span className='text text-danger'>{errors.name}</span>
                                                    <input type="text" id="form3Example1c" name='name' className="form-control"  value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <span className='text text-danger'>{errors.email}</span>
                                                    <input type="email" name='email' id="form3Example3c" className="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <span className='text text-danger'>{errors.password}</span>
                                                    <input type="password" name='password' id="form3Example4c" className="form-control" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <span className='text text-danger'>{errors.confirm_password}</span>
                                                    <input type="password" name='confirm_password' id="form3Example4cd" className="form-control"  value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"} className="img-fluid" alt="Logo" />;

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;