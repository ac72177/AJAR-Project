import LoginButton from "../components/login/LoginButton";
import SignupButton from "../components/login/SignupButton";
import "../styles/landing/style.css";
import { Divider } from "@material-ui/core";

const LandingView = () => {
  return (
    <div
      className="landing-container fade-in"
      style={{
        height: "100vh",
      }}
    >
      <a id="top"></a>
      <div className="banner">
        <img src="https://i.imgur.com/9lEyT89.png" />
        <h1>
          <em className="welcome">welcome</em>
        </h1>
        <LoginButton />
        <SignupButton />
      </div>

      <div className="display-row">
        <div className="flex-container">
          <div className="flex-left">
            <img
              className="landing-photo"
              src="https://i.imgur.com/bBLvpSU.png"
              alt="picture"
            />
          </div>
          <div className="flex-right">
            <h3>Create plans, set due dates, and add action items</h3>
          </div>
        </div>
      </div>

      <Divider variant="middle" />

      <div className="display-row">
        <div className="flex-container">
          <div className="flex-right">
            <h3>Track the progress of all plans</h3>
          </div>
          <div className="flex-left">
            <img
              className="landing-photo"
              src="https://i.imgur.com/bBLvpSU.png"
              alt="picture"
            />
          </div>
        </div>
      </div>

      <Divider variant="middle" />

      <div className="display-row">
        <div className="flex-container">
          <div className="flex-left">
            <img
              className="landing-photo"
              src="https://i.imgur.com/bBLvpSU.png"
              alt="picture"
            />
          </div>
          <div className="flex-right">
            <h3>View detailed information on specific a plan</h3>
          </div>
        </div>
      </div>

      <Divider variant="middle" />

      <div className="display-row">
        <div className="flex-container">
          <div className="flex-right">
            <h3>Visualize plan timelines on the calendar</h3>
          </div>
          <div className="flex-left">
            <img
              className="landing-photo"
              src="https://i.imgur.com/bBLvpSU.png"
              alt="picture"
            />
          </div>
        </div>
      </div>

      <Divider variant="middle" />

      <div className="display-row">
        <div className="flex-container">
          <div className="flex-left">
            <img
              className="landing-photo"
              src="https://i.imgur.com/bBLvpSU.png"
              alt="picture"
            />
          </div>
          <div className="flex-right">
            <h3>Watch your garden flourish as you make progress on plans!</h3>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-banner">
          <img className="footer-logo" src="https://i.imgur.com/9lEyT89.png" />
          <br />
          <h5>Created by Team AJAR :)</h5>
          <a href="https://github.com/ac72177/AJAR-Project">
            <i className="fa fa-github" aria-hidden="true"></i> Source code
          </a>
          <br />
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingView;
