import React from "react";

const Cover = () => {
  return (
    <div className="cover-bg p-3 p-lg-4 text-white">
      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div className="avatar hover-effect bg-white shadow-sm p-1">
            <img
              src="images/avatar.jpg"
              width="200"
              height="200"
              alt="Description"
            />
          </div>
        </div>
        <div className="col-lg-8 col-md-7 text-center text-md-start">
          <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
            Joyce Harrison
          </h2>
          <p data-aos="fade-left" data-aos-delay="100">
            Graphic Designer & Web Developer
          </p>
          <div
            className="d-print-none"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <a
              className="btn btn-light text-dark shadow-sm mt-1 me-1"
              href="right-resume.pdf"
              target="_blank"
            >
              Download CV
            </a>
            <a className="btn btn-success shadow-sm mt-1" href="#contact">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
