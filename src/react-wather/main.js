import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Application from './Application';
import "./style.css";

const Main = () => {
    return (
        <div>
            <Nav />
            <Application />
        </div>
    );
};

Main.propTypes = {};

export default Main;