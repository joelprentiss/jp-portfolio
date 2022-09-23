import React from 'react';
import '../styles/main.css'

const styles={
 padding:{
  padding:'10%'
 },
 button:{
  background:'#da0011',
  color: '#0E0004',
  font: 'bold'
 }
}

export default function Projects() {
  return (
    <div className='extraPadding' style={styles.padding}>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <h1>Projects Joel has worked on.</h1>
  <h4>These are some projects and apps Joel has worked on. Be sure to check back regularly as more apps and projects are added.</h4>
  <div class="col">
    <div class="card">
      <img src="./Epic & User Story.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Quar+z Project Management</h5>
        <p class="card-text">A sleek easy to use project management tool that allows you to create teams, users, and projects. Allows users to update project status as well as cost.</p>
      <a href='https://github.com/BrianLalli/Quartz.git' target='_blank' rel='noreferrer'>
      <button style={styles.button}>GitHub Repository</button>
      </a>
      <a href='https://quartzg3.herokuapp.com/' target='_blank' rel='noreferrer'>
      <button style={styles.button}>Deployed Heroku</button>
      </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./184215536-2ecdfc8d-1968-4eec-b3e7-9c745902b086.gif" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Travel Planner</h5>
        <p class="card-text">A simple application for planning a road trip. Allows you to calculate estimated fuel cost dependent on your vehicles MPG. Also allows you to pick or build your own playlist via Spotify.</p>
      <a href='https://github.com/Andrew87E/Travel-Planner' target='_blank' rel='noreferrer'>
      <button style={styles.button}>GitHub Repository</button>
      </a>
      <a href='https://andrew87e.github.io/Travel-Planner/' target='_blank' rel='noreferrer'>
      <button style={styles.button}>Deployed Heroku</button>
      </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Project 3 Presentation.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tech Blog</h5>
        <p class="card-text">A social media tech blog that allows users to create a profile, create blog post, comment on other users post, as well as update and delete post and comments.</p>
        <a href='https://github.com/Castoreno05/BootcampBlog.git' target='_blank' rel='noreferrer'>
        <button style={styles.button}>GitHub Repository</button>
        </a>
        <a href='https://bootcampblogg.herokuapp.com/' target='_blank' rel='noreferrer'>
      <button style={styles.button}>Deployed Heroku</button>
      </a>
      </div>
    </div>
  </div>
 </div>
    </div>
  );
}