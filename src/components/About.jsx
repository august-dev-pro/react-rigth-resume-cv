import React from "react";

const About = () => {
  return (
    <div className="about-section pt-4 px-3 px-lg-4 mt-1">
      <div className="row">
        <div className="col-md-6">
          <h2 className="h3 mb-3">About Me</h2>
          <p>
            Hello! I’m Joyce Harrison. I am passionate about UI/UX design and
            Web Design. I am a skilled Front-end Developer and master of Graphic
            Design tools such as Photoshop and Sketch.
          </p>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="row mt-2">
            <div className="col-sm-4">
              <div className="pb-1">Age</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">28</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">Email</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">Joyce@company.com</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">Phone</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">+0718-111-0011</div>
            </div>
            <div className="col-sm-4">
              <div className="pb-1">Address</div>
            </div>
            <div className="col-sm-8">
              <div className="pb-1 text-secondary">
                140, City Center, New York, U.S.A
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
