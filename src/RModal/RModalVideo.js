import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import './main.scss';

const RModalVideo = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

            <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
        </div>
    );
};

RModalVideo.propTypes = {};

export default RModalVideo;
