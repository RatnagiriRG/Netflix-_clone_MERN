import React from "react";
import "./Signup_Style.css";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

function Signup() {
  return (
    <div className="signup-container">
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, Tv Shows and more</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Get Started</button>
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
