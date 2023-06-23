import maleImg from "../assets/male.svg";
import femaleImg from "../assets/female.svg";
import { useEffect, useState } from "react";
import "../index.css";
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { json, useNavigate } from "react-router-dom";

const UserBox = ()=>{

    const navigate = useNavigate();

    const [userData,setUserData]= useState({});

    useEffect(()=>{
      setUserData(JSON.parse(localStorage.getItem('user')));
    },[]);

    return(
        <div className="flex flex-row justify-center items-center gap-6 userBox-main">
            <div className="userBox">
                <UilSignOutAlt className="out-icon" onClick={()=>{
                    localStorage.removeItem('user');
                    navigate('/login',{replace:true});
                }}/>
                {userData.gender == 'male'? <img src={maleImg} style={{width:100,}}/>: <img src={femaleImg} style={{width:100,}}/>}
            </div>
            <div className="flex flex-col">
                <label className="helloTitle" >Hello,</label>
                <label className="userBox-title">{userData.fname +' '+ userData.lname}</label>
            </div>
        </div>
    );
}

export default UserBox;