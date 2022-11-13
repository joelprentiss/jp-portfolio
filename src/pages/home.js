import React from 'react';
import '../styles/main.css';
import '../styles/card.css';


export default function Home(){
    return(
        <div className='extraPadding backgroundAll'>
            <div  className="card text-center row">
            <card className='col-sm-12'>
            <img className= 'image-card-top' style={{width: "25rem"}} src = './profile-pic.png' alt="profile of Joel Prentiss"/>
            <h3 className='card-title'>Joel Prentiss is a web developer specilizing in full stack development. An experienced entrepeneur and content creator. Joel is also a US Navy Veteran.</h3>
            <p className='card-body'>
                Since leaving active duty military service in 2016, my professional career has been filled with some truly incredible work experiences. In 2017 I began working at JP Morgan Chase, and within a few short years I moved from teller to a licensed investment banker. I eventually left banking to pursue a lifelong dream of business ownership. I have spent the last two years getting a very practical education in everything from content marketing and social media management, financial planning and forecasting, and all the other hats and roles one fills when running a small business. I have a strong passion for developing and implementing business processes, marketing campaigns and enriching customer and user experience. I believe my practical skills and technical knowledge will make me an excellent addition to your team. 
            </p>
            
            <h4>Check me out on Social Media!</h4>
            <h5>I am an active video content creator with over 93k followers in his community!</h5>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            <card className='card-sm'>
            <img className='imageResize' src="./Tiktok-img.png" alt='TikTok Logo'></img>
            <a href='https://www.tiktok.com/@thegijoel?lang=en'>
            <button className='button'>Follow me on Tik Tok</button>
            </a>
            </card>
            <card className='card-sm'>
            <img  className='imageResize' src="./YT-img.png" alt='Youtube Logo'></img>
            <a href='https://youtube.com/channel/UCdEh-M50CLrCv_W81k3hEBA'>
            <button className='button'>Subscribe to me on YouTube</button>
            </a>
            </card>
            <card className='card-sm'>
            <img className='imageResize' src="./IG-img.png" alt='Instagram Logo'></img>
            <a href='https://instagram.com/thegijoel'>
            <button className='button'>Follow me on Instagram</button>
            </a>
            </card>
            </div>
            </card>
        </div>
        </div>
    )
}

