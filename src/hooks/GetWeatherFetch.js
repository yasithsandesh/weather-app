import axios from "axios";
import { useEffect, useState } from "react";

const GetWeather = (param)=>{
    const [data, setData] = useState({});



    const fetchData = async(loca)=>{
        try{
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=a1a2c317ea3669d0b6f6c15b8bec87a8`);
            setData(res.data);
        }catch(error){
            console.log(error);
        }
    }


    useEffect( ()=>{   
        fetchData(param);
    },[param]);

  
    return data;
}

export default GetWeather;