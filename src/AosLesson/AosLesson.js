import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../img.json';
import './main.css';

const AosLesson = () => {
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div>
            <div className='imgSection'>
                <img data-aos="fade-zoom-in" data-aos-duration="2000" src={img[0].img_url} />
                <img data-aos="fade-right" data-aos-duration="2000" src={img[1].img_url} />
                <img data-aos="flip-left" data-aos-duration="2000" src={img[2].img_url} />
                <img data-aos="fade-up" data-aos-duration="2000" src={img[3].img_url} />
                <img data-aos="fade-botom" data-aos-duration="2000" src={img[4].img_url} />
                <img data-aos="zoom-out" data-aos-duration="2000" src={img[5].img_url} />
                
            </div>
        </div>
    );
};

AosLesson.propTypes = {};

export default AosLesson;