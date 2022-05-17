import React from 'react';
import PropTypes from 'prop-types';
import { Context } from './ConText';
import Display from './Display';

const person = "Alex";

const ConText1 = () => {
    return (
        <div>
            <Context.Provider value={person}>
                <Display />    
            </Context.Provider> 
        </div>
    );
};

ConText1.propTypes = {};

export default ConText1;