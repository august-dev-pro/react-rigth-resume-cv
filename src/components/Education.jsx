import React from "react";

const Education = () => {
  return (
    <div className="education-section px-3 px-lg-4 pb-4">
      <h2 className="h3 mb-4">Education</h2>
      <div className="timeline">
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
              Masters in Information Technology{" "}
              <span className="text-muted h6">
                from International University
              </span>
            </div>
            <div className="text-muted text-small mb-2">2011 - 2013</div>
            <div>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </div>
          </div>
        </div>
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
              Bachelor of Computer Science{" "}
              <span className="text-muted h6">from Regional College</span>
            </div>
            <div className="text-muted text-small mb-2">2007 - 2011</div>
            <div>
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
            </div>
          </div>
        </div>
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
              Science and Mathematics{" "}
              <span className="text-muted h6">from Mt. High Scool</span>
            </div>
            <div className="text-muted text-small mb-2">1995 - 2007</div>
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

export default Education;
