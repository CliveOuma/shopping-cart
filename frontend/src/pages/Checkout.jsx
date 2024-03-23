import React from "react";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="col-md-7 col-lg-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h4 className="mb-0">Billing address</h4>
          </div>
          <div className="card-body">
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                <div className="col-sm-6 my-1">
                  <label for="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6 my-1">
                  <label for="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12 my-1">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping
                    updates.
                  </div>
                </div>

                <div className="col-12 my-1">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address2" className="form-label">
                    Address 2{" "}
                    <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="col-md-5 my-1">
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <br />
                  <select className="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4 my-1">
                  <label for="state" className="form-label">
                    State
                  </label>
                  <br />
                  <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>Nairobi</option>
                    <option>Machakos</option>
                    <option></option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
              <br />
              <button
                className="w-100 btn btn-success "
                type="submit" onClick={() => navigate("/mpesa")}>
                Deposit Now
              </button>
              <div className="text-center">
                <p>Payment:</p>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item">Go to M-PESA menu.</li>
                  <li className="list-group-item">Select lipa na M-PESA.</li>
                  <li className="list-group-item">Enter 247247 as Business Number.</li>
                  <li className="list-group-item">Enter 0740719423 as ACCOUNT NUMBER.</li>
                  <li className="list-group-item">Enter your M-PESA pin and send.</li>
                  <li className="list-group-item">You will receive an sms confirming the transaction.</li>
                </ol>
              </div>
              <button
                className="w-100 btn btn-primary"
                type="submit" onClick={() => navigate("/login")}>
                Login to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
