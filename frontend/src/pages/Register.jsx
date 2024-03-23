/* eslint-disable */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './auth.css'
import { Footer, Navbar } from "../components";

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!formData.name.trim()) {
            validationErrors.name = "name is required";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            validationErrors.email = "Email is invalid"
        }
        if (!formData.password.trim()) {
            validationErrors.password = "password is required"
        } else if (formData.password.length < 5) {
            validationErrors.password = "password should be atleast 5 characters"
        }
        if (formData.confirmpassword !== formData.password) {
            validationErrors.confirmpassword = "password does not match"
        }
        setErrors(validationErrors)
    }

    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center  align-items-center vh-100'>
                <section className="auth ">
                    <div className="form ">
                        <div className="form-container border shadow-sm">
                            <h2>Register</h2>
                            <form action="" onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="text"><strong>Name</strong></label>
                                    <input type="text" placeholder="Enter your name" name="name" value={formData.name}
                                        onChange={handleChange} />
                                    {errors.name && <span className='text-danger'> {errors.name}</span>}
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="text"><strong>Email</strong></label>
                                    <input type="text" placeholder="Enter your email" name="email" value={formData.email}
                                        onChange={handleChange} />
                                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                                </div>

                                <div>
                                    <label htmlFor="password"><strong>Password</strong></label>
                                    <input type="password" placeholder="Enter your password" name="password" value={formData.password}
                                        onChange={handleChange} />
                                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                                </div>

                                <div>
                                    <label htmlFor="password"><strong>Confirm Password</strong></label>
                                    <input type="password" placeholder="Confirm your password" name="confirmpassword" value={formData.confirmpassword}
                                        onChange={handleChange} />
                                    {errors.confirmpassword && <span className='text-danger'>{errors.confirmpassword}</span>}
                                </div>
                                <button type="submit" className="Btn">Sign up</button>
                                <span className="Signup">
                                    <p>Already have an account ?
                                        <Link to="/login" className="active">Log in</Link>
                                    </p>
                                </span>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
};

export default Register;