import { useState } from "react";
import { toast } from "react-toastify"
import { Footer, Navbar } from "../components";
import 'react-toastify/dist/ReactToastify.css'
import './contact.css'


function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !subject || !message) {
      return toast.error('please fill in the details', {
        position: "top-left",
      });
    }
    try {
      const response = await fetch('/api/form', {
        method: 'post',
        headers: {
          'content-Type': 'application/json',

        },
        body: JSON.stringify()

      });
      if (response.ok) {
        toast.info('Email sent successfully');
        //reset the form
      } else {
        toast.error('email not sent');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center  align-items-center vh-100 ">
        <section className="auth">
          <div className="form">
            <div className="form-container">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Full name</label>
                  <input type="text" placeholder="Enter full name" name="user-name"
                    onChange={(e) => setFullname(e.target.value)} />
                </div>

                <div>
                  <label>Email</label>
                  <input type="email" placeholder="Enter email" name="user-name"
                    onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" name="user-email"
                    onChange={(e) => setSubject(e.target.value)} />
                </div>

                <div>
                  <label>Message</label>
                  <textarea name="message" id="" cols="20" rows="3"
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Send message</button>
                </div>

              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default Contact;
