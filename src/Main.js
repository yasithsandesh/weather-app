import { WeatherBox } from "./components/WeatherBox";
import { WetherD } from "./components/WeatherDetails";
import MobileViewBox from "./components/WeatherMinViewBox.js";
import "./components/weatherDetails.css";
import { useState } from "react";
import ReqImgApi from "./hooks/ReqImgApi.js";
import GetTime from "./hooks/TimeAndDay.js";
import GetWeather from "./hooks/GetWeatherFetch.js";
import Inputs from "./components/Inputs";
import Images from "./components/Images";
import UserBox from "./components/UserBox";
import { UilLocationPoint } from "@iconscout/react-unicons";
import AllDataFetch from "./hooks/AllData";



export default function Main() {

 const userdata = JSON.parse(localStorage.getItem("user"));

  const [query, setQuery] = useState({ q: userdata.loc });

  const [img, setImg] = useState([{}, {}]);

  const defLocation = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Tokyo",
    },
    {
      id: 3,
      name: "Sydney",
    },
    {
      id: 4,
      name: "Toronto",
    },

    {
      id: 5,
      name: "Paris",
    },
  ];


  const data = GetWeather(query.q);

  const typeImg = data?.weather?.[0]?.description;

  const [response, loading] = ReqImgApi(typeImg);

  const [locData,zone,num,icon,Wtype] = AllDataFetch(data.coord);

 
  console.log(num);
 

  const timeData = GetTime(zone, num);

  const ui = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundImage: `url(${response})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        justifyContent: "center",
  
      }}
      className="home"
    >
      {/* <LoadingScreen/> */}

      <div className="md:w-2/3 flex md:flex-col p-6 items-center justify-center flex-row w-0">
        {query == null ? (
          <div></div>
        ) : (
          <WeatherBox
            locationName={data?.name}
            temp={locData?.daily?.[0]?.temp?.day}
            time={timeData}
            type={Wtype}
            icon={icon}
          />
        )}

        <div className="flex flex-row  items-center gap-3">
          {defLocation.map((loc, index) => (
            <div
              key={loc.id}
              className="loc-div flex flex-row gap-1"
              onClick={() => {
                setQuery({ q: loc.name });
              }}
            >
              <label className="loc-title">{loc.name}</label>
              <UilLocationPoint className="loc-icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/3 maninBox w-full ">
        <UserBox />
        <Inputs setQuery={setQuery} />
        {query == null ? (
          <div></div>
        ) : (
          <MobileViewBox
            locationName={data?.name}
            temp={locData?.daily?.[0]?.temp?.day}
            time={timeData}
            icon={icon}
            type={Wtype}
          />
        )}
        {query == null ? (
          <div></div>
        ) : (
          <WetherD
            clouds={data.clouds?.all}
            humidity={data.main?.humidity}
            wind={data.wind?.speed}
            high={locData?.daily?.[0]?.temp?.max}
            low={locData?.daily?.[0]?.temp?.min}
          />
        )}

        {img.map((im, index) => (
          <Images key={index} setImg={setImg} query={Wtype} imgs={im} />
        ))}
      </div>
    </div>
  );

  return ui;
}
