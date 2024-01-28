import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/registerFormPage.css';


export default function RegistrationFormPage() {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
        
        <div className="row con g-0 d-flex justify-content-center align-items-center vh-100">

            <form className='col-md-8 register-box'>
                <div className="row mb-4 mt-4">
                    <div className="col text-center">
                        <h3 className='fw-bold'>Welcome to e-adalat</h3>
                        <span>your one step solution for all your disputes</span>
                    </div>
                </div>

                <div className="row mb-4 d-flex justify-content-center">

                    <div className="col-md-3">
                        <label htmlFor="firstName" class="form-label fw-bold">First name<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="firstName" placeholder='Enter your first name'/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="secondName" class="form-label fw-bold">Last name<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="secondName" placeholder='Enter your second name'/>
                    </div>
                    <div class="col-md-3">
                        <label htmlFor="gender" class="form-label fw-bold">Gender<span className='text-danger'>*</span></label>
                        <div class="input-group">
                            <select class="form-select form-control" id="gender" aria-label="Select gender">
                                <option selected disabled>Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                </div>


                <div className="row mb-4 d-flex justify-content-center">

                    <div className="col-md-3">
                        <label htmlFor="emailId" class="form-label fw-bold">Email id<span className='text-danger'>*</span></label>
                        <input type="email" class="form-control" id="emailId" placeholder='youremail@gmail.com'/>
                    </div>
                    <div class="col-md-3">
                        <label htmlFor="phoneNo" class="form-label fw-bold">Phone no<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="phoneNo" placeholder="0123456789" maxlength="10"/>
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="datepicker" className="form-label fw-bold">
                            Date of Birth<span className='text-danger'>*</span>
                        </label>
                        <div className="input-group">
                            <DatePicker
                                id="datepicker"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                className="form-control custom-date-picker"
                                placeholderText="Select date"
                                dateFormat="yyyy-MM-dd"
                            />
                            <label htmlhtmlFor='datepicker' className="input-group-text">
                                <i className='bx bxs-calendar-alt'></i>
                            </label>
                        </div>
                    </div>
                </div>


                <div className="row mb-4 d-flex justify-content-center">

                    <div className="col-md-6">
                        <label htmlFor="aadhar" className="form-label fw-bold">Aadhar no<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="aadhar" maxlength="16" placeholder='0000 0000 0000 0000'/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="panNo" class="form-label fw-bold">PAN no<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="panNo"  placeholder='youremail@gmail.com'/>
                    </div>
                </div>

                <div className="row mb-4 d-flex justify-content-center">

                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label fw-bold">Street Address<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="address" maxlength="16" placeholder='No.1 first cross'/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="city" class="form-label fw-bold">City / District<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="city"  placeholder='puducherry'/>
                    </div>

                </div>

                <div className="row mb-4 d-flex justify-content-center">

                    <div class="col-md-3">
                        <label htmlFor="state" class="form-label fw-bold">State<span className='text-danger'>*</span></label>
                        <div class="input-group">
                            <select class="form-select form-control" id="state" aria-label="Select gender">
                                <option selected disabled></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label htmlFor="country" class="form-label fw-bold">Country<span className='text-danger'>*</span></label>
                        <div class="input-group">
                            <select class="form-select form-control" id="country" aria-label="Select gender">
                                <option selected disabled></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="city" class="form-label fw-bold">Pincode<span className='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="city"/>
                    </div>

                </div>

                <div className='d-flex justify-content-center mb-4'>
                    <button type="submit" class="btn btn-dark px-5">Continue to Registering</button>
                </div>
            </form>
        </div>

    );
}
