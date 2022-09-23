import React from 'react';
import '../styles/navbar.css'


function NavTabs({currentPage, handlePageChange}){
    return(
        <div className='fixed-top'>
        <div>
            <header>
                <div className="container d-flex align-items-center flex-column">
                    <h1 className="masthead-heading text-uppercase mb-0">Joel Prentiss</h1>
                    <p className="masthead-subheading font-weight-light mb-0">Web Designer - Content Creator - Veteran</p>
                </div>
            </header>
        </div>
        <nav className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
            <div className="container">
             <button className="btn navbar-toggler text-uppercase rounded" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto navLi">
                    <li className="nav-item mx-0 mx-lg-1 navLi"><a  
                    href="#home" onClick={() => handlePageChange('home')}
                    className={currentPage !== 'home' ? 'nav-link active' : 'nav-link'}>
                        Home
                        </a></li>
                        <li className="nav-item mx-0 mx-lg-1 navLi"><a  
                        href="#project"
                        onClick={() => handlePageChange('project')}
                        className={currentPage !== 'project' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                            </a></li>
                        <li className="nav-item mx-0 mx-lg-1 navLi"><a  
                        href="#resume"
                        onClick={() => handlePageChange('resume')}
                        className={currentPage !== 'resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                            </a></li>
                        <li className="nav-item mx-0 mx-lg-1 navLi"><a  
                        href="#contact"
                        onClick={() => handlePageChange('contact')}
                        className={currentPage !== 'contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                            </a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
};

export default NavTabs;
// className="nav-link py-3 px-0 px-lg-3 rounded"