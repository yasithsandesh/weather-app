import axios from "axios";
import { useEffect, useState } from "react";

const ReqImgApi = (param) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);



  const fetchData = async (type) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${type}&client_id=xHc6OTcGK5m3uduRCDRzPwPi0KLE-Bv3CRqJNp-x1qA`);
      setResponse(res.data.results[5].urls.full);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);
  

 
  return [response,loading] ;
};



export default ReqImgApi;