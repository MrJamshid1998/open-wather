import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoadingLesson2 from './LoadingLesson2';

const LoadingLesson = () => {

    const [joke, setJoke] = useState({});
    const [loading, setLoading] = useState(false);

    const getJoke = () => {
        setLoading(true);
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            const { icon_url, value } = data;
            setJoke({ icon_url, value });
            setLoading(false);
            console.log(data);
        })
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            getJoke();
        }, 5000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <div>
            <LoadingLesson2 joke={joke} loading={loading} getJoke={getJoke} />
        </div>
    );
};

LoadingLesson.propTypes = {};

export default LoadingLesson;