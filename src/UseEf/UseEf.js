import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UseEf = () => {
    const [jsontype, setjsontype] = useState('posts');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${jsontype}`)
        .then(response => response.json())
        .then(json => console.log(json))
    });

    return (
        <div>
            <button className='btn btn-lg btn-danger' onClick={() => setjsontype('users')}>Users</button>
            <button className='btn btn-lg btn-danger' onClick={() => setjsontype('comments')}>Comments</button>
            <button className='btn btn-lg btn-danger' onClick={() => setjsontype('albums')}>Albums</button>  
            <br />
            
        </div>
    );
};

UseEf.propTypes = {};

export default UseEf;