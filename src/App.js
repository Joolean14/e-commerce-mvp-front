import "./App.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

import logo from "./falso-idolo-logo.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} alt="Falso Ídolo Logo"></img>
        <div className="menu">
        </div>
      </header>
      <footer className="footer">
        <div className="social-icons-container">
          <AiFillFacebook className="footer-icon"></AiFillFacebook>
          <AiOutlineInstagram className="footer-icon"></AiOutlineInstagram>
          <AiOutlineYoutube className="footer-icon"></AiOutlineYoutube>
        </div>
        <div className="legal-container">
          <p className="brand-name legal-text">Falso Ídolo ©</p>
          <p className="legal-text">|</p>
          <p className="legal-text">Terms & Conditions</p>
          <p className="legal-text">|</p>
          <p className="legal-text">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
