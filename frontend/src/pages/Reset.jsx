/* eslint-disable */
import React from "react";
import styles from "./auth.css"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer, Navbar } from "../components";


const Reset = () => {
    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <section className="auth">
                    <div className="form">
                        <div className="form-container border shadow-sm ">
                            <h2>Reset Password</h2>
                            <form>
                                <div>
                                    <label htmlFor="text"><strong>Email</strong></label>
                                    <input type="text" placeholder="Enter your email" required />
                                </div>

                                <button className="Btn">Submit</button>
                                <div className="Links">
                                    <p>Back to
                                        <Link to="/login" className="active"> Login</Link>

                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
};

export default Reset;