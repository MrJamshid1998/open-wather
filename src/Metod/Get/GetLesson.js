import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const GetLesson = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUser(res.data);
            console.log(res);
        })
        .catch(error => {
            console.error("ERROR!");
        })
    }, []);

    return (
        <div>
            {users.map(user => (
                <div>
                    <h2> User name:{user.name}</h2>
                    <p>User phone: {user.phone}</p>
                    <br />
                </div>
            ))}
        </div>
    );
};

GetLesson.propTypes = {};

export default GetLesson;