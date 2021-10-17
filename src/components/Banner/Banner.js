import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home-banner">
            <div className="h-100 row w-75 mx-auto align-items-center">
                <div className="col-7 banner-info">
                    <h1>Get Better Care For <br /> Your <span style={{color:"navy"}}> Health</span></h1>
                    <p>Health is the condition of our body and mind. Health may be good or bad. Good health is the good condition of our body and mind. There is a saying, “Health is wealth”.</p>
                    <button className="btn border-0 rounded-pill ps-3  text-white py-2 gradient-btn">Learn more <i class="fas ms-2 fa-angle-right"></i></button>
                </div>
            </div>
        </div>

    );
};

export default Banner;