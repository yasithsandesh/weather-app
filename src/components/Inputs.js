import "./weatherDetails.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Inputs = ({setQuery}) => {

  const [location, setLocation] = useState("");

  const handleSearchClick=()=>{
    if (location !== "") setQuery({ q: location });
  }

  return (
    <div className="searchBox sticky" >
    <SearchIcon className="searchIcon" onClick={handleSearchClick} />
    <input
      className="searchInput"
      placeholder="Enter Location"
      type="text"
      value={location}
      onChange={(e) => {
        e.preventDefault();
        setLocation(e.target.value);
      }}
    />
  </div>

  );
};


export default Inputs;