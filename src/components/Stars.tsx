import React, { useEffect, useState } from 'react';


interface starIterface{
    starsArray:React.ReactNode[]
}

const Stars:React.FC<starIterface>=({starsArray})=>{
    

    return (
            <ul>
                {starsArray.map(e=>e)}
            </ul>
    );
}

export default Stars;
