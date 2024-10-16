import React from "react";
import { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
function Form() {
  const [text] = useTypewriter({
    words: ["Contact Me"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    messageTitle: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyZsDESb5GwAdTZqFA8lE3tX19WM7JMnbvpcaXv9UJJfBDm2PJgiZWdv22O8p53yTZBKA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // const scriptURL =
    //   "https://script.google.com/macros/s/AKfycbyZsDESb5GwAdTZqFA8lE3tX19WM7JMnbvpcaXv9UJJfBDm2PJgiZWdv22O8p53yTZBKA/exec"; // Replace with your script URL

    // fetch(scriptURL, {
    //   method: "POST",
    //   body: new URLSearchParams(formData),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       alert("Thank you! Your form is submitted successfully.");
    //       setFormData({
    //         firstName: "",
    //         messageTitle: "",
    //         email: "",
    //         address: "",
    //       });
    //       setError(""); // Clear any previous error
    //     } else {
    //       throw new Error("Form submission failed");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error!", error.message);
    //     setError("Form submission failed. Please try again.");
    //   });
  };

  return (
    <div className="container-md contact">
      <div className="">
        <div className="p-3">
          <span className="underscore" style={{ color: "blue" }}>
            _
          </span>{" "}
          <span id="skill">
            {}
            {text}
          </span>
          <Cursor />
        </div>
      </div>
      <div>
        <form method="post" onSubmit={(e)=>handleSubmit(e)}>
          <div className="row myform">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="child form-control"
              placeholder="Enter Yout Name"
              aria-label="First name"
            />

            <input
              type="text"
              name="messageTitle"
              value={formData.messageTitle}
              onChange={handleChange}
              className="child form-control"
              placeholder="Message Title"
              aria-label="Last name"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="child form-control"
              placeholder="Email"
              aria-label="Last name"
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your message here..."
              className="form-control child"
              rows="4"
              cols="50"
            />

            <button type="submit" class="btn btn-primary">
              Submit Now
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
