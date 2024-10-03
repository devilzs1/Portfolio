import React from "react";

const SoftSkills = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Soft Skills</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Leadership</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Teamwork</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Communication</h3>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Problem-solving</h3>
            </div>
          </div>
          
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Critical Thinking</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Time Management</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
