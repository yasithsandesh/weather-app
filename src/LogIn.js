import Nav from "./components/nav";
import RegiImg from "./assets/register.svg";
import PersonIcon from "@mui/icons-material/Person";
import ControlledRadioButtonsGroup from "./components/GenderSelecter";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import useLocalStorage from "use-local-storage";


const Login = () => {
  
  const navigate = useNavigate();

  const [mode, setMode] = useLocalStorage('mode'?"dark":"light");

  const [toggle, setToggle] = useState("register");


  const bColor =
    "flex md:flex-row flex-col h-screen items-center p-9 gap-5 p-" + mode;
  const titleClass = "reg-title-" + mode;

  const [firstName, setFirstname] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [gender, setGender] = useState("Female");
  const [location, setLocation] = useState(null);

  const [error, setError] = useState();

  console.log(error);

  const [logPassword, setLogPassword] = useState(null);
  const [logEmail, setLogEmail] = useState(null);

  const createAccount = async () => {
    try {
      const emailRegex = new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "gm"
      );

      if (firstName == null) {
        setError("Please enter First Name");
      } else if (lastName == null) {
        setError("Please enter Last Name");
      } else if (password == null) {
        setError("Please enter Password");
      } else if (password.length < 5 || password.length > 20) {
        setError("Password must be between 5 - 20 charcters");
      } else if (email == null) {
        setError("Please enter Email");
      } else if (!email.match(emailRegex)) {
        setError("Invalid Email");
      } else if (mobile == null) {
        setError("Please enter Mobile");
      } else if (location == null) {
        setError("Please enter Location");
      } else {
        const res = await axios.post("http://localhost:8000/user/add", {
          fname: firstName,
          lname: lastName,
          loc: location,
          password: password,
          email: email,
          mobile: mobile,
          gender: gender,
        });

        {
          res.data == "user added" ? setToggle("logIn") : console.log(res.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logIn = async () => {
    try {
      if (logEmail == null) {
        setError("Please enter Email");
      } else if (logPassword == null) {
        setError("Please enter Password");
      } else {
        const res = await axios.post("http://localhost:8000/user/login", {
          password: logPassword,
          email: logEmail,
        });

        const respon = res.data;

        {
          respon.message == "login Sucess" ?  localStorage.setItem('user',JSON.stringify(respon.data)) : console.log("aaa");
        }

       

        {
          respon.message == "login Sucess" ?  navigate('/main', {replace: true}) : console.log("aaa");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={bColor}>
      <Nav setMode={setMode} mode={mode} />
      <div className="flex md:flex-row flex-col h-screen justify-center items-center  p-9 gap-8">
        <div className="md:w-1/3 flex flex-col gap-8">
          {toggle == "register" ? (
            <>
              <label className={titleClass}>Create Account</label>
              <div className="flex items-center reg-input-box">
                <PersonIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Frist Name"
                  onChange={(event) => (
                    event.preventDefault(), setFirstname(event.target.value)
                  )}
                />
              </div>
              <div className="flex items-center reg-input-box">
                <PersonIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Last Name"
                  onChange={(event) => (
                    event.preventDefault(), setLastName(event.target.value)
                  )}
                />
              </div>
              <div className="flex items-center reg-input-box">
                <LockIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Password"
                  type="password"
                  onChange={(event) => (
                    event.preventDefault(), setPassword(event.target.value)
                  )}
                />
              </div>
              <div className="flex items-center reg-input-box">
                <EmailIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Email"
                  onChange={(event) => (
                    event.preventDefault(), setEmail(event.target.value)
                  )}
                />
              </div>
              <div className="flex items-center reg-input-box">
                <PhoneIphoneIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Mobile"
                  onChange={(event) => (
                    event.preventDefault(), setMobile(event.target.value)
                  )}
                />
              </div>
              <div className="flex gdiv">
                <ControlledRadioButtonsGroup
                  setGender={setGender}
                  gender={gender}
                />
              </div>
              <div className="flex  items-center reg-input-box">
                <WhereToVoteIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Enter Your Location"
                  onChange={(event) => (
                    event.preventDefault(), setLocation(event.target.value)
                  )}
                />
              </div>
              <div className="flex items-center justify-center md:flex-row flex-col gap-5">
                <button className="reg-btn" onClick={createAccount}>
                  Create Account
                </button>
                <button
                  className="log-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggle("login");
                  }}
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            <>
              <label className={titleClass}>Log In</label>

              <div className="flex items-center reg-input-box">
                <EmailIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Email"
                  onChange={(e) => (
                    e.preventDefault(), setLogEmail(e.target.value)
                  )}
                />
              </div>

              <div className="flex items-center reg-input-box">
                <LockIcon className="reg-input-icon" />
                <input
                  className="reg-input"
                  placeholder="Password"
                  onChange={(e) => (
                    e.preventDefault(), setLogPassword(e.target.value)
                  )}
                />
              </div>

              <div className="flex items-center  justify-center md:flex-row flex-col gap-5">
                <button className="log-btn" onClick={logIn}>
                  Login
                </button>

                <button
                  className="reg-btn"
                  onClick={() => {
                    setToggle("register");
                  }}
                >
                  Create Account
                </button>
              </div>
            </>
          )}
        </div>

        <div className="md:w-2/3 ">
          <img src={RegiImg} />
        </div>
      </div>
    </div>
  );
};

export default Login;
