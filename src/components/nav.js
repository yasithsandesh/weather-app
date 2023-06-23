import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../index.css";

const Nav = ({ setMode, mode }) => {

  const handelClick = ()=>{
    const newMode = mode === "light"?"dark":"light"
    setMode(newMode);
  }


  return (
    <div className="flex md:flex-col gap-5">
      <div className="icon-div"
        onClick={(e) => {
          e.preventDefault();
         handelClick();
        }}
      >
        {mode=="light"?(  <LightModeIcon className="icon" />):(<NightlightIcon className="icon"/>)}
      
      </div>
      <div  className="icon-div">
        <AccountCircleIcon className="icon"/>
      </div>
    </div>
  );
};

export default Nav;
