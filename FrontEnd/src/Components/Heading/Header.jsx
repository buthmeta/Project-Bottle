import "./Header.css";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaGoogle,
  FaUserCircle,
} from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  // Retrieve stored state from localStorage (if available)
  const [isSearchActive, setSearchActive] = useState(
    () => JSON.parse(localStorage.getItem("searchState")) || false
  );
  const [isUserActive, setUserActive] = useState(
    () => JSON.parse(localStorage.getItem("userState")) || false
  );

  // Update localStorage when state changes
  useEffect(() => {
    localStorage.setItem("searchState", JSON.stringify(isSearchActive));
  }, [isSearchActive]);

  useEffect(() => {
    localStorage.setItem("userState", JSON.stringify(isUserActive));
  }, [isUserActive]);

  // Toggle search bar
  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
    setUserActive(false); // Close user login when opening search
  };

  // Toggle user login form
  const toggleUser = () => {
    setUserActive(!isUserActive);
    setSearchActive(false); // Close search when opening user login
  };

  // Scroll navbar
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(true);
      });
    };
  }, []);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    axios
      .post("http://localhost:8081/login", value)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const notify = () => {
    toast("Submitted Successful!");
  };

  return (
    <>
      <div className="Heading">
        <h2>Welcome to our products in this bottle</h2>
        <div className="HeadingIcon">
          <FaFacebookF className="IconHead" />
          <FaTwitter className="IconHead" />
          <FaTiktok className="IconHead" />
          <FaInstagram className="IconHead" />
          <FaGoogle className="IconHead" />
        </div>
      </div>

      <nav className={`Navabar ${scroll ? "active" : ""}`}>
        <div className="Logo">
          <img src="https://pngimg.com/d/sport_bottle_PNG12.png" alt="Logo" />
          Flow Nature Bottle
        </div>

        <div className="navText">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Products</a>
          <a href="#service">Services</a>
          <a href="#testimonial">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="GroupIcon">
          <TiWorld className="Group" />
          <FiSearch className="Group" id="search_icon" onClick={toggleSearch} />
          <FaUserCircle className="Group" id="user_icon" onClick={toggleUser} />
        </div>

        {/* Search Bar (Shows when isSearchActive is true) */}
        <div className={`search ${isSearchActive ? "active" : ""}`}>
          <input type="search" placeholder="Search..." />
        </div>

        {/* User Login Form (Shows when isUserActive is true) */}
        <form
          onSubmit={handleSubmit}
          className={`user ${isUserActive ? "active" : ""}`}
        >
          <h3>Login</h3>
          <input
            name="email"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            type="email"
            placeholder="Example@gmail.com"
            required
          />
          <input
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input onClick={notify} type="submit" value="Login" />
          <ToastContainer />
          <p>Don't have an account yet?</p>
          <div className="UserIcon">
            <FaGoogle className="Usericon" />
            <FaTwitter className="Usericon" />
          </div>
        </form>
      </nav>
    </>
  );
};

export default Header;
