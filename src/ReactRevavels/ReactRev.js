import React from 'react';
import PropTypes from 'prop-types';
import imgs from '../img.json';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';
import Reveal from 'react-reveal/Reveal';
import './animation.css';

const ReactRev = () => {
    return (
        <div>
            <Fade right big cascade>
                <h1 className='text-center'>Hello React Reveal Fade.</h1>
            </Fade>
            <Flip right>
                <h1 className='text-center'>Hello React Reveal Flip.</h1>
            </Flip>
            <RubberBand>
                <h1  className='text-center'>Hello React Reveal Flip RubberBand.</h1>
            </RubberBand>
            <Reveal effect="animation" duration="1000">
            <h1  className='text-center'>Hello React Reveal Flip Reveal.</h1>
            </Reveal>
        </div>
    );
};

ReactRev.propTypes = {};

export default ReactRev;