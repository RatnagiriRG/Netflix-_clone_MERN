import React, { useState } from "react";
import "./Signup_Style.css";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { firebaseAuth } from "../utils/firebase_config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [showpassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  }); 
  return (
    <div className="signup-container">
      <BackgroundImage />
      <div className="content">
        <Header  />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, Tv Shows and more</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div
            className={
              showpassword ? "form-showpassword" : "form-unshowpassword"
            }
          >
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />

            {showpassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showpassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
