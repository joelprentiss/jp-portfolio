import React, {useState} from 'react';
import {validateEmail} from '../controller'
const styles={
    cardStyle:{
        background: '#f8fff4',
        color: '#0E0004'
    }
}
function Contact (){
    const [email, setEmail] = useState('');
    const [name, setName]= useState('');
    const [messageBody, setBody]= useState('');
    const[errorMessage, setErrorMessage]= useState('');
  
  
    const handleInputChange = (e)=>{
      const {target}=e;
      const inputType = target.name
      const inputValue = target.value;
      if (inputType === 'email'){
        setEmail(inputValue);
      } else if (inputType === 'name'){
        setName(inputValue);
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
      setName('');
    };
    return(
        <div className='contactPadding row row-cols-md-3'>
        <card className='col'>
        <form action='https://script.google.com/macros/s/AKfycbwwaxTnYYmf7m9ALRjwP7WB1Wu2dfTV66uQjXr_iYOKKstaDzXUUQMGisH17tWJL-2lbw/exec' method="POST"  id="contactForm">
        <div className="container">  
        <h3>Contact me!</h3>
        <fieldset>
        <input onChange={handleInputChange} value={name} placeholder="Your name" type="text" tabindex="1" required autofocus/>
        </fieldset>
        <fieldset>
        <input onChange={handleInputChange} value={email} placeholder="Your Email Address" type="email" tabindex="2" required/>
        </fieldset>
        <fieldset>
        <input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
        </fieldset>
        <fieldset>
         <textarea onChange={handleInputChange} value={messageBody} placeholder="Type your Message Here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
        <button onClick={handleFormSubmit} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
          </div>
        </form>
</card>
<div className="card contactCard list-inline" style={styles.cardStyle}>
        <div className="card-body">
      <h5 className="card-title">Joel's Contact Information</h5>
      <ul className="card-text contactCard">
        <li>Email: prentissjoel@gmail.com</li>
        <li>Phone Number: (925)594-0381</li>
        <li>Instagram: @thegijoel</li>
        <li>TikTok: @thegijoel</li>
        <li>Address: PO Box 2041 Georgetown TX 78626</li>
      </ul>
    </div>
        </div>
        </div>
    )
};
export default Contact;