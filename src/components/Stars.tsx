import React, { useEffect, useState } from 'react';

interface StarInterface{
    numberOfStars:number;
    byUser:boolean
}

const Stars = () => {
    let number =4;
    let byUser=false;
    let [arrayOfStars,setArrayOfStars]=useState<React.ReactNode[]>([])
    
    useEffect(()=>{
        let arrayOFstarsPRerenderd=[]
        for(let i=0;i<5;i++){
            arrayOFstarsPRerenderd.push(<span style={{color:i<number&&byUser?'yellow':"black"}}>adwd</span>)
        }
        setArrayOfStars(arrayOFstarsPRerenderd)  
    },[])
    console.log(arrayOfStars)

    return (
        <div>
            <ul>
                {arrayOfStars.map(e=>e)}
            </ul>
        </div>
    );
}

export default Stars;
