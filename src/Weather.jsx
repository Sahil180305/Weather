import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import { useState } from 'react'
export default function Weather(){
    let [info,setInfo]=useState({
        Description: "mist",
        Humidity: 79,
        Name:"Delhi",
        Temp: 29.05,
        Temp_max: 29.05,
        Temp_min:29.05,
        Weather: "Mist",
        fellsLike:"24.45"
    });
    const updateInfo=(result)=>{
        setInfo(result);
    }
    return(
        <div>
            <h2 style={{textAlign:"center"}}>Weather App by Sahil</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={info}/>
        </div>
    )
}