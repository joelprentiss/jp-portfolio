import React from 'react';




export default function Footer({currentPage, handlePageChange}){
return(
<div className='backgroundAll adjust'>
<footer className="page-footer adjust">
  <div className="text-center">
    <a className='footerLink'href="*"> Brought to you by Joel Prentiss</a>
  </div>
  {/* <div className='text-center'>
  <a className='footerLink' href='#home' onClick={() => handlePageChange('home')}>Home</a>
  <a className='footerLink' href='#portfolio'>Portfolio</a>
  <a className='footerLink' href='#resume'  onClick={() => handlePageChange('resume')}>Resume</a>
  <a className='footerLink' href='#contact' onClick={() => handlePageChange('contact')}>Contact</a>
  </div> */}
</footer>
</div>
)};