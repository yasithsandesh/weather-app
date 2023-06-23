import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Login from "./LogIn";

export default function App(){
    return(
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
    );
}