import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Context } from './ConText';

const Display = () => {
    ////1-usuli///////////
    const person = useContext(Context);

    return (
        <div>
            {/* //////2-usuli////////////// */}
            <Context.Consumer>
                {person => <h1>{person}</h1>}
            </Context.Consumer>

            <h1>{person}</h1>
        </div>
    );
};

Display.propTypes = {};

export default Display;