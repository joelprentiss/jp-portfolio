import React, {useState} from 'react';
import {validateEmail} from '../controller'

function Contact (){
    const [email, setEmail] = useState('');
    const [messageSubject, setSubject]= useState('');
    const [messageBody, setBody]= useState('');
    const[errorMessage, setErrorMessage]= useState('');
  
  
    const handleInputChange = (e)=>{
      const {target}=e;
      const inputType = target.name
      const inputValue = target.value;
      if (inputType === 'email'){
        setEmail(inputValue);
      } else if (inputType === 'messageSubject'){
        setSubject(inputValue);
      }else {
        setBody(inputValue)
      }
    }
    const handleFormSubmit =(e)=>{
      e.preventDefault();
      if (!validateEmail(email)){
        setErrorMessage('Please enter a valid email')
        return;
      }
      setBody('');
      setEmail('');
      setSubject('');
    };
    return(
        <div>
                    <section class="page-section" id="contact">
            <div class="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* <!-- Name input--> */}
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            {/* <!-- Email address input--> */}
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                            {/* <!-- Message input--> */}
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            {/* <!-- Submit Button--> */}
                            <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
};
export default Contact;