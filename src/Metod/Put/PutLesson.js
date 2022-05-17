import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const PutLesson = () => {
   const [updateAt ,setUpdatedAt] = useState(null);

   useEffect((res)=>{
       axios.put('https://reqres.in/api/articles/1')
       .then((response)=>{
           setUpdatedAt(response.data.updatedAt);
           console.log(response);
       });
   },[])

    return (
        <div>
            <div className='card'>
                <div className='header'>
                    PUT method lesson
                </div>
                <div className='body'>
                    Post: {updateAt}
                </div>
            </div>
        </div>
    );
};

PutLesson.propTypes = {};

export default PutLesson;