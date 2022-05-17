import React, { useState } from 'react';
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
export const WatherApi = async (query) => {
    const { data } = await axios.get(URL, {
        params:{
            q:query,
            appid: "3667046a0b335947884153b7129411d8",
            units: "metric",
        }
    }); 
    return data;
}