import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar  as HollowStar  } from '@fortawesome/free-regular-svg-icons'
import {  faStar  as SolidStar } from '@fortawesome/free-solid-svg-icons'




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
