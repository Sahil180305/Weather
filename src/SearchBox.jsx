import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_KEY="94dcaf27dfa20ee6d3abd0ed032482a5";
    const URL="https://api.openweathermap.org/data/2.5/weather"

    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);

    function handelChange(event){
        setCity(event.target.value);
    }
    async function getWeatherInfo(){
        try{
            let response =await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            let result={
                Humidity:jsonresponse.main.humidity,
                Temp:jsonresponse.main.temp,
                Temp_min:jsonresponse.main.temp_min,
                Temp_max:jsonresponse.main.temp_max,
                Name:jsonresponse.name,
                Description:jsonresponse.weather[0].description,
                Weather:jsonresponse.weather[0].main,
                feelsLike:jsonresponse.main.feels_like
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    }
    async function handelSubmit(event){
        try{
            event.preventDefault();
            let result= await getWeatherInfo();
            console.log(result);
            updateInfo(result);
            setErr(()=>{
                return false;
            })
        }catch(err){
            setErr(true);
        }
        setCity("");
        
    }



    return(
        <div style={{textAlign:"center"}}>
            <form onSubmit={handelSubmit}>
                <TextField id="outlined-basic" label="City Name" value={city} variant="outlined" required onChange={handelChange} />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Submit</Button>
                <br></br>
                <br></br>
                {err && <p style={{color:"red"}}>Sorry Can't Fetch the data for the provided city</p>}
            </form>
        </div>
    )
}