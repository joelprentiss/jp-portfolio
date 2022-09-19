import React from 'react';
import '../styles/navbar.css'
import '../styles/main.css'

function NavTabs({currentPage, handlePageChange}){
    return(
        <div>
        <nav className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
            <div className="container">
             <button className="btn navbar-toggler text-uppercase rounded" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a  
                    href="#home" onClick={() => handlePageChange('home')}
                    className={currentPage !== 'home' ? 'nav-link active' : 'nav-link'}>
                        Home
                        </a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a  
                        href="#project"
                        onClick={() => handlePageChange('project')}
                        className={currentPage !== 'project' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                            </a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a  
                        href="#resume"
                        onClick={() => handlePageChange('resume')}
                        className={currentPage !== 'resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                            </a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a  
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