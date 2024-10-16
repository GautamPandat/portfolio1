import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Navbar from "../Components/Navbar";
import Skill from "../Components/Skill";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
function Home() {
  const [text] = useTypewriter({
    words: [
      "Embedded & Robotics Engineer",
      "Electronics & Communication Engineer",
      "Automation Engineer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  return (
    <>
      <Navbar />
      <div className="homeBackground">
        <div className="homeTitle">
          <p className="fs-2">Hello World!</p>
          <p>I'm Gautam Mishra</p>
          <p>
            I'm,{" "}
            <span className="text-custom">
              {}
              {text}
              {}
            </span>{" "}
            <Cursor />{" "}
          </p>
          <p>from India.</p>
          <button type="button" className="btn btn-outline-discovery">
            <a
              href="https://drive.google.com/file/d/1625txDTQa2FzYfL8p3cd2okV7VBPze2l/view?usp=drivesdk"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
      <Skill />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
