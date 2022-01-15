import "./App.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
function App() {
  return (
    <div className="App">
      <footer className="footer">
        <div className="social-icons-container">
          <AiFillFacebook></AiFillFacebook>
          <AiOutlineInstagram></AiOutlineInstagram>
          <AiOutlineYoutube></AiOutlineYoutube>
        </div>
        <div>
          <p>Falso Ídolo © | Terms & Conditions | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
