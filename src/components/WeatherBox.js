import "./wetherBox.css";
import CloudIcon from "@mui/icons-material/Cloud";
import {convertTemp} from "../function/convert.js"

export function WeatherBox(props) {

  const imgIcon = (icon)=>  `http://openweathermap.org/img/wn/${icon}@2x.png`;


  return (
    <div className="main">
      <div className="tempDiv">
        <label className="tempValue">{props?.temp?.toFixed()}°</label>
      </div>
      <div className="locationTimeDiv">
        <label className="city">{props.locationName}</label>
        <label className="date">{props.time}</label>
      </div>
      <div className="iconDiv">
        <img src={imgIcon(props.icon)}className="wetherIcon"/>
        <label className="wetherType">{props.type}</label>
      </div>
    </div>
  );
}
