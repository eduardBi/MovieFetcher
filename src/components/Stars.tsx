import React, { useEffect, useState } from 'react';
import {starsByUser  } from "./MoviePoster";

interface starIterface{
    starsArray:React.ReactNode[]
}

const Stars:React.FC<starIterface>=({starsArray})=>{
    

    return (
        <div>
            <ul>
                {starsArray.map(e=>e)}
            </ul>
        </div>
    );
}

export default Stars;
