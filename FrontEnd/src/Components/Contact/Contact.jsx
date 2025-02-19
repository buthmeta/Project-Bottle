import { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleSubmit = () => {
    axios
      .post("http://localhost:8081", data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="head">Contact us for more information</h1>
      <h2 className="head_small">That's related how to run business</h2>

      <div className="head_contact_bg">
        <div className="bg_contact"></div>
      </div>

      <div className="input_form">
        <form onSubmit={handleSubmit} className="form">
          <div className="form_text">
            <input
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              name="name"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
              placeholder="Example@gmail.com"
            />
            <input
              type="number"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              name="phone"
              placeholder="Enter Your Phone"
            />
            <input className="submit" type="submit" value="Submit Form" />
          </div>

          <div className="text_content">
            <textarea
              className="text"
              name="text"
              id=""
              onChange={(e) => setData({ ...data, text: e.target.value })}
              placeholder="Your Opinion"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
