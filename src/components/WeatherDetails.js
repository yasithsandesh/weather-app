import "./weatherDetails.css";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import AirIcon from "@mui/icons-material/Air";
import { UilBrightness } from "@iconscout/react-unicons";
import { UilWindSun } from "@iconscout/react-unicons";


export function WetherD(props) {
  return (
    <div className=" opacity-70">
      <div className="weatherDetailsBox">
        <label className="mainTitle">Weather Detail</label>

        <div className="flex flex-row justify-center items-center gap-2 high-low-box">
          <div className="flex flex-row justify-center items-center gap-1">
            <UilBrightness className="high-low-icon"/>
            <label className="high-low-title">High: {props?.high?.toFixed()}°</label>
          </div>

          <div className="flex flex-row high-low-box justify-center gap-1 items-center">
            <UilWindSun className="high-low-icon"/>
            <label className="high-low-title">Low: {props?.low?.toFixed()}°</label>
          </div>
        </div>

        <div className="detailsBox ">
          <WbCloudyIcon className="iconw" />
          <label className="title">Cloudy</label>
          <label className="valueP ">{props.clouds}%</label>
        </div>

        <div className="detailsBox">
          <WaterDropIcon className="iconw" />
          <label className="title">Humidity</label>
          <label className="valueP">{props.humidity}%</label>
        </div>

        <div className="detailsBox">
          <AirIcon className="iconw" />
          <label className="title">Wind</label>
          <label className="valueP">{props.wind}MPH</label>
        </div>

       
          {/* <div className="detailsBox">
            <ThunderstormIcon className="iconw" />
            <label className="title">Rain</label>
            <label className="valueP">MPH</label>
          </div>
      */}

      
        
      </div>
    </div>
  );
}
