import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LocStroge = () => {

    const [item, setItem] = useState("");
    function changeitem(){
        localStorage.setItem("Text", item);
    }
    function removeitem(){
        localStorage.removeItem("Text");
    }
    function clearitem(){
        localStorage.clear();
    }
    return (
        <div>
            <h1>LocalStroge darsi</h1>
            <input type={"text"} className="form-control border-danger" placeholder="Text..." value={item} onChange={(e) => {setItem(e.target.value);}} />

            <button className='btn btn-success m-2' onClick={changeitem}>Send</button>
            <button className='btn btn-warning m-2' onClick={removeitem}>Remove</button>
            <button className='btn btn-danger m-2' onClick={clearitem}>Clear</button>
            <br />
            Item: 
            {localStorage.getItem("Text") && localStorage.getItem("Text")}
        </div>

    );
};

LocStroge.propTypes = {};

export default LocStroge;