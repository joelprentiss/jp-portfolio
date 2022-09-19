import React, { useState } from 'react';
import NavTabs from '../src/pages/navtabs';
import Home from '../src/pages/home';
import Project from '../src/pages/project';
import Resume from '../src/pages/resume';
import Contact from '../src/pages/contact';


export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('home');

   const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    }
    if (currentPage === 'project') {
      return <Project />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if(currentPage === 'contact'){
      return <Contact/>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
    </div>
  );
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}