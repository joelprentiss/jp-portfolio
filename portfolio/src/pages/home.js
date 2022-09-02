import React from 'react';

export default function Home(){
    return(
        <div>
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Image--> */}
                <img class="masthead-avatar mb-5" src="../../public/profile-pic.png" alt="..." />
                <h1 class="masthead-heading text-uppercase mb-0">Joel Prentiss</h1>
                <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
                </div>
                <p class="masthead-subheading font-weight-light mb-0">Web Designer - Content Creator - Veteran</p>
            </div>
        </header>
        </div>
    )
};