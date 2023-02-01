import React from 'react';


export default function MyResume() {    
   return (
      <div>     
  <div class="row row-cols-1  g-4 resumePadding"> 
  <h1 className='text-center'>Resume</h1> 
  <div class="col">
    <div class="card">
        <div class="card-body">
        <h5 class="card-title">Technical Skills</h5>
        <ul class="card-text">
          <li>Languages: HTML5, CSS, MySQL, REACT, Javascript, JQuery</li>
          <li>Applications: Node.js, NPM, MongoDB, VSCode, Github, Handlebars</li>
          </ul>
      </div>
    </div>
  </div>
  <h3 className='text-center'>Work Experience</h3>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">US Navy</h5>
        <p class="card-text">Responsible for training and guidance in shipboard emergency response procedures and shipboard 
firefighting. Mechanical engineer responsible for maintenance and repair of emergency response 
equipment. Guided engineering team through technical evaluation and reduced evolution time by 20 
hours. 
</p>
<h5 className='card-title'>Key Accomplishments:</h5>
<ul className='card-text'>
  <li>Navy and Marine Corps Achievement Medal</li>
  <li>Letter of Commendation from Admiral K.M. Sweeny, USN</li>
  <li>Developed and executed a plan to troubleshoot mechanical and electrical deficiencies to 49 
mechanical valve hydraulically controlled stations. 
</li>
<li>Lead instructor for Damage Control University, I assisted in the qualification of 1,230 sailors, 
directly contributing to material condition and damage control capabilities during a combat 
deployment.
</li>
</ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
            <div class="card-body">
        <h5 class="card-title">JP Morgan Chase Bank</h5>
        <p class="card-text">Provided and drove solutions based on unique customer needs. Passion for technology adopting new 
                              and existing customers into a digital first banking mentality. Primary responsibilities were to acquire, 
                              manage, retain meaningful relationships with customers, using financial knowledge to offer thoughtful 
                              solutions to help address their financial needs</p>
        <h5 className='card-title'>Key Accomplishments</h5>
        <ui className='card-body'>
          <li>Chairperson for Austin area veteran’s employee resource group</li>
        </ui>
      </div>    
    </div>
  </div>
    <h3 className='text-center'>Education</h3>
    <div class="col">
    <div class="card">
            <div class="card-body">
        <h5 class="card-title">UT Austin Center for Professional Education Coding Certificate Program: </h5>
        <p class="card-text">A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, jQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.

</p>
      </div>
    </div>
    </div>
    <div class="col">
    <div class="card">
            <div class="card-body">
        <h5 class="card-title">BBA Project Management: Southern New Hampshire University, Manchester, NH </h5>
        <p class="card-text">Expected completion date is April 2024.</p>
      </div>
    </div>
    </div>
  
</div>
<h6 className='text-center'>Click the link below to access a printable version of this resume</h6>
  <div className='d-flex justify-content-center'>
    <a href='https://drive.google.com/file/d/1PGLAjVYNuYkVNNwcaYTbpwgYz4HP8ERJ/view?usp=sharing'>
  <button className='button resumeButton'>Get a copy of this resume</button>
  </a>
  </div>
      </div>
    )
  };