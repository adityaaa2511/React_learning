import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({handleinfo}){

    let [city,setcity]=useState("");

    const GEO_URL="http://api.openweathermap.org/geo/1.0/direct";
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="c61b1c28b220417efd99a3ddfce41cb2";

    let getweatherinfo= async ()=>{
        let response=await fetch(`${GEO_URL}?q=${city}&appid=${API_KEY}`);
        let res= await response.json();
        let info= await fetch(`${API_URL}?lat=${res[0].lat}&lon=${res[0].lon}&appid=${API_KEY}&units=metric`);
        let weatherinfo= await info.json();
        let result={
            city:city,
            temp:weatherinfo.main.temp,
            mintemp:weatherinfo.main.temp_min,
            maxtemp:weatherinfo.main.temp_max,
            humidity:weatherinfo.main.humidity,
            feelslike:weatherinfo.main.feels_like,
            weather:weatherinfo.weather[0].description
        };
        console.log(result);
        return result;
    }

    let handlechange=(event)=>{
        setcity(event.target.value);
    }

    let handlesubmit= async(evt)=>{
        console.log(city);
        evt.preventDefault();
        setcity("");
        let newinfo=await getweatherinfo();
        handleinfo(newinfo);
    }
    return (
        <div className="SearchBox">
            <h1>Search For the Weather!</h1>
            <form onSubmit={handlesubmit}>
                <TextField onChange={handlechange} value={city} id="city" label="City Name" variant="outlined" required/>
                <br/><br />
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </form>
        </div>
    );
}