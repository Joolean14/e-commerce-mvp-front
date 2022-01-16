import "./App.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import logo from "./falso-idolo-logo.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} alt="Falso Ídolo Logo"></img>
        <div className="menu"></div>
      </header>
      <div className="filters">
        <div className="filter-icons">
          <AiOutlineSearch className="filter-icon"></AiOutlineSearch>
          <AiOutlineShoppingCart className="filter-icon"></AiOutlineShoppingCart>
          <AiOutlineUser className="filter-icon"></AiOutlineUser>
        </div>
        <div className="filter-categories">
          <p>LIMITED COLLECTION</p>
          <p>SHIRTS</p>
          <p>HOODIES</p>
          <p>ATHLEISURE</p>
          <p>KIDS</p>
          <p>MUSIC</p>
          <p>POSTERS</p>
          <p>BITS & BOBS</p>
          <p>WAREHOUSE</p>
        </div>
      </div>
      <div className="products-container">
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/200"></img>
          <p>Texas Moon CD</p>
          <p>$12.00</p>         
        </div>
      </div>
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
