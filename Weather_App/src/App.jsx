import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function App() {
  let [weatherinfo,setweatherinfo]=useState({
    city:"Delhi",
    temp:"18.06",
    maxtemp:"18.06",
    mintemp:"18.06",
    feelslike:"17.46",
    humidity:"59",
    weather:"smoke"
  })

  let handleinfo=(newinfo)=>{
    setweatherinfo(newinfo);
  }
  return (
    <>
      <SearchBox handleinfo={handleinfo}/>
      <InfoBox weatherinfo={weatherinfo}/>
    </>
  );
}
