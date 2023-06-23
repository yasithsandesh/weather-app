import "./index.css";
import MainImg from "./assets/main-home-img.svg";
import Nav from "./components/nav.js";
import {  useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";


const Home = () => {

  const navi = useNavigate();

  const [mode, setMode] = useLocalStorage('mode'?"dark":"light");

  const className = 'flex md:flex-row flex-col h-screen justify-center items-center p-9 gap-8 p-'+ mode;

  const mainTitleClass = 'mainTitle-'+ mode;

  return (

      <div className={className}>
        <Nav  mode={mode} setMode={setMode}/>

        <div
          className="flex md:w-1/2 w-full justify-center items-center"
          
        >
          <div className="flex flex-col gap-3">
            <label className={mainTitleClass} >
              Discover the Beauty of Weather in Your Location
            </label>
            <label style={{ color: "#898989" }}>
            you can stay informed about the weather in your area and explore the beauty of various weather types through a diverse collection of high-quality images. Whether it's a sunny day with clear skies, a dramatic thunderstorm, a serene snowfall, or a misty morning, our carefully curated images perfectly capture the essence and atmosphere of each weather type.
            </label>
            <button className="btn-start" onClick={()=>{
              navi('login',{replace:true});
            }}>Strat</button>
          </div>
        </div>

        <div className="md:w-1/2 w-full justify-center items-center">
          <img src={MainImg} />
        </div>
      </div>

  );
};

export default Home;
