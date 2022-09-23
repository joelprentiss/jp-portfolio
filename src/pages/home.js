import React from 'react';
import '../styles/main.css';
import '../styles/card.css';


export default function Home(){
    return(
        <div className='extraPadding'>
            <div  className="card text-center row">
            <card className='col-sm-12'>
            <img className= 'image-card-top' style={{width: "25rem"}} src = './profile-pic.png' alt="profile of Joel Prentiss"/>
            <h3 className='card-title'>Joel Prentiss is a web developer specilizing in full stack development. An experienced entrepeneur and content creator. Joel is also a US Navy Veteran.</h3>
            <p className='card-body'>You know, if it wasn't for the existential terror of staring into a void of space, I'd say I'm feeling better today. The infection's run its course, Thanks to the blue meanie back there. No, you accidentally survived. It's a billion to one cosmic fluke. And now you wanna pull off a... What do you call it?  Wai-Wait a second, let me ask you something. If we can do this, you know, go back in time, why don't we just find baby Thanos, you know, and...  Now, this may benefit your reality, but my new one…not so much. In this new branched Reality, without our chief weapon against the forces of darkness, our world will be overrun. Millions will suffer. So, tell me, Doctor, can your science prevent all that?  For the last five years I've been trying to do one thing: Get to right here. That's all it's been about. Bringing everybody back.  </p>
            
            <h4>Check out Joel on Social Media!</h4>
            <h5>Joel is an active video content creator with over 93k followers in his community!</h5>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            <card className='card-sm'>
            <img className='card-img-top' src="https://via.placeholder.com/150C/O https://placeholder.com"></img>
            <button className='button'>Follow Joel on Tik Tok</button>
            </card>
            <card className='card-sm'>
            <img  className='card-img-top' src="https://via.placeholder.com/150C/O https://placeholder.com"></img>
            <button className='button'>Subscribe to Joel on YouTube</button>
            </card>
            <card className='card-sm'>
            <img className='card-img-top' src="https://via.placeholder.com/150C/O https://placeholder.com"></img>
            <button className='button'>Follow to Joel on Instagram</button>
            </card>
            </div>
            </card>
        </div>
        </div>
    )
}

