import "./wetherBox.css";
import CloudIcon from "@mui/icons-material/Cloud";
import {convertTemp} from "../function/convert.js"

export default function MobileViewBox(props) {

  const imgIcon = (icon)=>  `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const ui = (
    <div className="mainMobileView">
      <div className="tempDiv">
        <label className="tempValue">{props?.temp?.toFixed()}°</label>
      </div>
      <div className="locationTimeDiv">
        <label className="city">{props.locationName}</label>
        {/* <label className="date">Tuesday 23:00</label> */}
        <label className="date">{props.time}</label>
      </div>
      <div className="iconDiv">
        <img src={imgIcon(props.icon)}/>
        <label className="wetherType">{props.type}</label>
      </div>
    </div>
  );
  return ui;
}
