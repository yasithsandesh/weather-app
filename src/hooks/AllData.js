import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const AllDataFetch = (param)=>{

    const[locData,setLocData] =  useState({ });

    const zone = locData.timezone;
    let num = parseInt(locData?.daily?.[1]?.dt);
    const icon = locData.daily?.[1]?.weather?.[0]?.icon;
    const Wtype =  locData.daily?.[1]?.weather?.[0]?.main;

    const apiCall = async (paramObj)=>{
        try{

            const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${paramObj.lat}&lon=${paramObj.lon}&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`);

            setLocData(res.data);


        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        apiCall(param);
    },[param]);


   
    return [locData,zone,num,icon,Wtype];
    
}

export default AllDataFetch;