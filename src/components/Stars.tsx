import React, { useEffect, useState } from 'react';
import {starsByUser  } from "./MoviePoster";

interface StarInterface{
    setUserVouted:(id:number,value:number)=>void;
    id:number;
    numberOfStars:number
}

const Stars:React.FC<StarInterface>=({setUserVouted,id,numberOfStars})=>{
    let byUser=true
    let [arrayOfStars,setArrayOfStars]=useState<React.ReactNode[]>([])
    
    useEffect(()=>{
        let arrayOFstarsPRerenderd=[]
        for(let i=0;i<5;i++){
            arrayOFstarsPRerenderd.push(
            <span  
            onClick={()=>setUserVouted(id,i)}
            style={
                    {color:i<numberOfStars/2 && byUser?'yellow':"black"}
                }>
                    adwd
            </span>)
        }
        setArrayOfStars(arrayOFstarsPRerenderd)  
    },[])

    return (
        <div>
            <ul>
                {arrayOfStars.map(e=>e)}
            </ul>
        </div>
    );
}

export default Stars;
