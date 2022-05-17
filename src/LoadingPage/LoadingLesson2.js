import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingLesson2 = ({ joke, loading, getJoke }) => {
    return (
        <div className='joke'>
            {loading ? <Skeleton circle={true} width={70} height={70} /> : <img src={joke.icon_url} width="70px" height="70px" /> }
            {loading ? <Skeleton count={3} /> : <p>{joke.value}</p>}
            <button onClick={getJoke}>Get new Joke</button>
        </div>
    );
};

LoadingLesson2.propTypes = {};

export default LoadingLesson2;