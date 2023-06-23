import { useEffect, useState } from "react";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import axios from "axios";
import "../index.css";

const Images = ({ setImg, query, imgs }) => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (type) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${type}&client_id=xHc6OTcGK5m3uduRCDRzPwPi0KLE-Bv3CRqJNp-x1qA`
      );
      setImg(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const handleDownload = ()=>{
    const link = document.createElement('a');
    link.href = imgs.urls?.full;
    link.download = 'image.jpg';
    link.click();
  }

  return (
    <div className="flex justify-center items-center flex-row gap-2  my-8">
      <DownloadForOfflineIcon  className="img-icon-download " onClick={handleDownload} />
      <img src={imgs.urls?.full} style={{ width: "300px"}} className="rounded"  alt="Image"  />
    </div>
  );
};

export default Images;
