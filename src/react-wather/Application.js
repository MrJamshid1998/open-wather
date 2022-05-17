import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { WatherApi } from './api/WatherApi';

const Application = () => {

    const [query, setQuery] = useState('');
    const [wather, setWather] = useState({});


    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await WatherApi(query);
            setWather(data);
            setQuery();
            console.log(data);
        }
    }
    console.log(Object.keys(wather).length == 0)
    return (
        <div className='app'>
            <div className='main'>
                <input 
                    type={"text"} 
                    className="search" 
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={search}
                />
            </div>
            <div className='mal'>
                {Object.keys(wather).length !== 0 ? (
                    <div>
                        <img className='wathericon' src={`http://openweathermap.org/img/wn/${wather.weather[0].icon}.png`} />
                        <h2>{wather.name}<sup>{wather.sys.country}</sup></h2>
                        <h3>Harorat: {wather.main.temp} <sup>&deg;</sup>C</h3> 
                        <h5>{wather.weather[0].description}</h5>
                    </div>
                ):(
                    <h2>Not Fount</h2>
                )}
            </div>
        </div>
    );
};

Application.propTypes = {};

export default Application;