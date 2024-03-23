import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { FaGoogle } from "react-icons/fa";
import './contact.css'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        setErrors(validationErrors)
    }

    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center  align-items-center vh-100'>
                <section className="auth">
                    <div className="form">
                        <div className="form-container border shadow-sm">
                            <h2>Log in</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="text"><strong>Email</strong></label>
                                    <input type="text" placeholder="Enter your email" value={formData.email} name="email"
                                        onChange={handleChange} />
                                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                                </div>

                                <div>
                                    <label htmlFor="password"><strong>Password</strong></label>
                                    <input type="password" placeholder="Enter your password" name="password" value={formData.password}
                                        onChange={handleChange} />
                                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                                </div>


                                <button type="submit" className="Btn">Log in</button>
                                <div className="Links">
                                    <Link to="/reset">Forgot your Password</Link>
                                </div>
                                <p className="d-flex justify-content-center">---------- or ----------</p>

                            </form>
                            <button className="btn bg-success w-100  --btn-block">
                                <FaGoogle color="white" />Login With Google</button>
                            <span className="Signup">
                                <p>Don't have an account ?
                                    <Link to="/register" className="active">Sign up</Link>
                                </p>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
};
export default Login;
