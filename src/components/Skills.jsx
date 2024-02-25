import React from "react";

const Skills = () => {
  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3">Professional Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-2">
            <span>HTML</span>
            <div className="progress my-1">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                data-aos="zoom-in-right"
                data-aos-delay="100"
                data-aos-anchor=".skills-section"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="mb-2">
            <span>CSS</span>
            <div className="progress my-1">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                data-aos="zoom-in-right"
                data-aos-delay="200"
                data-aos-anchor=".skills-section"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="mb-2">
            <span>JavaScript</span>
            <div className="progress my-1">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                data-aos="zoom-in-right"
                data-aos-delay="300"
                data-aos-anchor=".skills-section"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-2">
            <span>Adobe Photoshop</span>
            <div className="progress my-1">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                data-aos="zoom-in-right"
                data-aos-delay="400"
                data-aos-anchor=".skills-section"
                style={{ width: "80%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="mb-2">
            <span>Sketch</span>
            <div className="progress my-1">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                data-aos="zoom-in-right"
                data-aos-delay="500"
                data-aos-anchor=".skills-section"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="mb-2">
            <span>Adobe XD</span>
            <div className="progress my-1">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                data-aos="zoom-in-right"
                data-aos-delay="600"
                data-aos-anchor=".skills-section"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
