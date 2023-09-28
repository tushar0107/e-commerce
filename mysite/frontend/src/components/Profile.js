import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [username, setUsername] = useState("tushar");
  const [password, setpassword] = useState("111111");
  const handleusername = (e) => {
    setUsername(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  useEffect(() => {
  });

  const handleLogin = () => {
    var csrfToken='';
    axios
      .get("http://127.0.0.1:8000/get-csrf-token/")
      .then((res) => {
        csrfToken = res.data.csrfToken;
      })
      .then(
        axios
          .post(
            "http://127.0.0.1:8000/api/login/",
            {
              username: username,
              password: password,
            },
            { "Content-Type": "application/json", "X-CSRFToken": csrfToken }
          )
          .then((res) => {
            localStorage.setItem('token',res.data.token);
          })
          .catch((err) => {
            console.log(err);
          })
      );
  };

  return (
    <>
      <div className="form-container">
            <input
              type="text"
              placeholder="Username"
              onChange={handleusername}
              value={username}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={handlepassword}
              value={password}
            ></input>
            <button onClick={handleLogin}>
              Login
            </button>

      </div>
    </>
  );
}
