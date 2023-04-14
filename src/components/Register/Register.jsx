import React, { useState } from "react";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [control, setControl] = useState(false);

  const auth = getAuth(app);

  const handleRegister = (event) => {
    event.preventDefault();

    console.log("hell");
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      console.log("okay tikh ace ");
    } else {
      setError("password tikh nai");
      return;
    }

    if (email) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      setError("broo hobe na email and pass lagbe");
    }
  };

  const handleEmail = () => {};

  console.log(email, password);
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <p className="text-danger">{error}</p>
              <form action="">
                <input
                  className="email p-3 m-2"
                  type="text"
                  placeholder="enter your Name"
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <div className="pass-container">
                  {control ? (
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="password p-3 m-2"
                      type="text"
                      value={password}
                      placeholder="enter your password"
                    />
                  ) : (
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="password p-3 m-2"
                      type="password"
                      placeholder="enter your password"
                    />
                  )}
                  <button onClick={() => setControl(!control)}>toggle</button>
                </div>
                <button
                  onClick={handleRegister}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-info">
                    already have account? login here..
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
        </div>
        <SocialLoginBtn></SocialLoginBtn>
      </div>
    </div>
  );
};

export default Register;
