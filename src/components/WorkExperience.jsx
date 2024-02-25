import React from "react";

const WorkExperience = () => {
  return (
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="h3 mb-4">Work Experience</h2>
      <div className="timeline">
        <div className="timeline-card timeline-card-primary card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
              Frontend Developer{" "}
              <span className="text-muted h6">at Creative Agency</span>
            </div>
            <div className="text-muted text-small mb-2">
              May, 2015 - Present
            </div>
            <div>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </div>
          </div>
        </div>
        <div className="timeline-card timeline-card-primary card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
              Graphic Designer{" "}
              <span className="text-muted h6">at Design Studio</span>
            </div>
            <div className="text-muted text-small mb-2">
              June, 2013 - May, 2015
            </div>
            <div>
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
            </div>
          </div>
        </div>
        <div className="timeline-card timeline-card-primary card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
              Junior Web Developer{" "}
              <span className="text-muted h6">at Indie Studio</span>
            </div>
            <div className="text-muted text-small mb-2">
              Jan, 2011 - May, 2013
            </div>
            <div>
              User generated content in real-time will have multiple touchpoints
              for offshoring. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
