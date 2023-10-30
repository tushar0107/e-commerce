import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/profile.css";

export default function Profile() {
  //for user authentication
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState("");
  
  //set user details after login
  const [user, setUser] = useState({});

  // for animation login module
  const [showProfile, setShowProfile] = useState('none');
  const [showAuth, setShowAuth] = useState('block')
  const [activeLogin, setActiveLogin] = useState({
                                              backgroundColor: '#98b7de',
                                              borderBottom: '3px solid #0a68d3'
                                            });
  const [activeSignUp, setActiveSignUp] = useState({
                                              backgroundColor: 'white',
                                              borderBottom: 'none'
                                            });
  const [loginTabPosition, setLoginTabPosition] = useState("50%");
  const [signuptabPosition, setSignUpTabPositon] = useState("150%");
  const handleusername = (e) => {
    setUsername(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handlephone = (e) => {
    setPhone(e.target.value);
  };
  const handlefirstname = (e) =>{
    setFirstname(e.target.value);
  };
  const handleaddress = (e) =>{
    setAddress(e.target.value);
  };
  const handlecity = (e) =>{
    setCity(e.target.value);
  };const handlepincode = (e) =>{
    setPincode(e.target.value);
  };

  // sets userdetails to localstorage if already logged in
  useEffect(() => {
    
    if(localStorage.getItem('user') !== null){
      if(JSON.parse(localStorage.getItem('user')).user_status==='logged_in'){
        setUser(JSON.parse(localStorage.getItem('user')));
        setShowProfile('block');
        setShowAuth('none');
      }
    }
  },[]);

  // login function
  const handleLogin = () => {
    var csrfToken='';
    axios
      .get("https://172.31.20.2:8000/get-csrf-token/")
      .then((res) => {
        csrfToken = res.data.csrfToken;
      })
      .then(
        axios
          .post(
            "https://172.31.20.2:8000/api/login/",
            {
              username: username,
              password: password,
            },
            { "Content-Type": "application/json", "X-CSRFToken": csrfToken }
          )
          .then((res) => {
            console.log(res.data);
            localStorage.setItem('user',JSON.stringify(res.data));
          }).then(()=>{
            setUser(JSON.parse(localStorage.getItem('user')));
            setShowProfile('block');
            setShowAuth('none');
          })
          .catch((err) => {
            console.log(err);
          })
      );
  };

  // registration function
  const handleSignUp = () =>{
    var csrfToken='';
    axios
      .get("https://172.31.20.2:8000/get-csrf-token/")
      .then((res) => {
        csrfToken = res.data.csrfToken;
      })
      .then(
        axios
          .post(
            "https://172.31.20.2:8000/api/register/",
            {
              username: username,
              password: password,
            },
            { "Content-Type": "application/json", "X-CSRFToken": csrfToken }
          )
          .then((res) => {
            console.log(res.data);
            localStorage.setItem('user',JSON.stringify(res.data));
          }).then(()=>{
            setUser(JSON.parse(localStorage.getItem('user')));
            setShowProfile('block');
            setShowAuth('none');
          })
          .catch((err) => {
            console.log(err);
          })
      )
  };

  //adding more user details to the user (creating a customer model in the backend)
  const updateUser = ()=>{
    axios.post(
            "https://172.31.20.2:8000/api/create-customer/",
            {
              username: user.username,
              password: password,
              first_name: firstname,
              last_name: lastname,
              streetaddr: address,
              city: city,
              pincode: pincode,
            },
            { "Content-Type": "application/json", "X-CSRFToken": user.csrfToken }
          )
          .then((res) => {
            console.log(res.data);
            localStorage.setItem('user',JSON.stringify(res.data));
          }).then(()=>{
            setUser(JSON.parse(localStorage.getItem('user')));
            setShowProfile('block');
            setShowAuth('none');
          })
          .catch((err) => {
            console.log(err);
          })
  }

  return (
    <>
      <div id="profile-page" style={{display: showProfile}}>
        <div className="user-image">
          <div className="bg-img">
            <img src="./images/samsung-banner.jpg" alt=""></img>
          </div>
          <h2 className="username">{user.username}</h2>
          <div className="profile-img">
            <img src="./images/men-fashion.jpeg" alt=""></img>
          </div>
          
        </div>


      </div>

      <div id="auth-modal" style={{display: showAuth}}>
        <div id="segment">
          <h3
            className="login-tab"
            style={activeLogin}
            onClick={() => {
              setActiveLogin({
                backgroundColor: "#98b7de",
                borderBottom: "3px solid #0a68d3",
              });
              setActiveSignUp({
                backgroundColor: "white",
                borderBottom: "none",
              });
              setLoginTabPosition("50%");
              setSignUpTabPositon("150%");
            }}
          >
            LOGIN
          </h3>
          <h3
            className="signup-tab"
            style={activeSignUp}
            onClick={() => {
              setActiveSignUp({
                backgroundColor: "#98b7de",
                borderBottom: "3px solid #0a68d3",
              });

              setActiveLogin({
                backgroundColor: "white",
                borderBottom: "none",
              });
              setLoginTabPosition("-100%");
              setSignUpTabPositon("50%");
            }}
          >
            SIGN UP
          </h3>
        </div>
        <div
          className="form-container login-form"
          style={{ left: loginTabPosition }}
        >
          <h1>Login</h1>
          <input
            type="text"
            onChange={handleusername}
            value={username}
            placeholder="Enter Username"
            className="username"
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            onChange={handlepassword}
            value={password}
          ></input>
          <button onClick={handleLogin}>Login</button>
        </div>
        <div
          className="form-container signup-form"
          style={{ left: signuptabPosition }}
        >
          <h1>Sign Up</h1>
          <input
            type="text"
            onChange={handleusername}
            value={username}
            placeholder="Enter Username"
            className="username"
          ></input>
          {/* <input
            type="email"
            placeholder="Enter email-id"
            onChange={handleemail}
            className="email"
          ></input> */}
          <input
            type="password"
            placeholder="Password"
            onChange={handlepassword}
            value={password}
          ></input>
          <button onClick={handleSignUp}>Login</button>
        </div>
      </div>
    </>
  );
}
