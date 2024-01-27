import React from 'react';
import '../css/register.css'

const RegistrationForm = () => {

    return (
        <div >
            
            <div className="row g-0 vh-100">

                {/* ----------------LEFT BOX------------------- */}

                <div className="col-md-4 left-box d-flex justify-content-center">
                    <div>
                        <div className="mb-5">
                            <h1>e-Adalat</h1>
                        </div>
                        <div>
                            <div>
                                <h2>A few Clicks</h2>
                                <h2>away to</h2>
                                <h2>solve all your</h2>
                                <h2>disputes</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* ----------------RIGHT BOX------------------- */}

                <div className="col-md-8 right-box">
                    
                <form>
                    <div className="mb-5">
                        <h2>Register your Account now!</h2>
                    </div>
                    <div className="row g-0 mb-5">
                        <div className="col-md-5 position-relative">
                            <label for="username" className="fw-bold form-label">User name</label>
                            <input type="text" className="form-control" id="username" placeholder='Enter your unique username'/>
                            <small id="e-username" className="text-danger position-absolute top-0 end-0">Oops! Not Available</small>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col-md-5 me-5 position-relative  mb-5">
                            <label for="email" className="fw-bold form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder='Enter your email address' />
                            <small id="e-email" className="text-danger position-absolute top-0 end-0">Email already in use</small>
                            <small id="sendcode" className="text-primary position-absolute end-0 end-0">Send code</small>
                        </div>
                        <div className="col-md-5 position-relative mb-5">
                            <label for="entercode" className="fw-bold form-label">Enter code</label>
                            <input type="text" className="form-control" id="entercode" placeholder='Enter your unique code send to your email' />
                            <small id="e-code" className="text-danger position-absolute top-0 end-0">invalid code!!</small>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-5 me-5 position-relative mb-5">
                            <label for="password" className="fw-bold form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder='Enter password' />
                            <small id="e-password" className="text-danger position-absolute top-0 end-0">Enter strong Password</small>
                        </div>
                        <div className="col-md-5 position-relative mb-5">
                            <label for="confirmpassword" className="fw-bold form-label">Confirm</label>
                            <input type="password" className="form-control" id="confirmpassword"placeholder='Enter password again' />
                            <small id="e-cpassword" className="text-danger position-absolute top-0 end-0">Password dosen't match</small>
                        </div>
                    </div>
                    <div className="row g-0 mb-3">
                        <div className="col-md-12 mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="checkForUpdates" />
                            <label className="form-check-label" htmlFor="checkForUpdates">yes i want to receive occasional updates and newsletters</label>
                        </div>
                        <div className="col-md-12 mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="checkForPolicy" />
                            <label className="form-check-label" htmlFor="checkForPolicy">I agree to all the <span className='fw-bold'>terms, Privacy policy and Fees</span></label>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-6 mb-3">
                            <button type="submit" className="btn btn-dark px-5">Continue</button>
                        </div>
                    </div>
                </form>

                </div>

            </div>

        </div>
    );
};

export default RegistrationForm;
