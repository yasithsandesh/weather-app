import axios from "axios";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const GetTime = (zone,num,format = "dd LLL yyyy' ")=>{
  
    const formatToLocalTime = DateTime.fromSeconds(num).setZone(zone).toFormat(format);

    return formatToLocalTime;
}

export default GetTime;