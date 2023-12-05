import React,{useState} from 'react'
import "./qualifications.css"

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index)=>{
    setToggleState(index);
  }
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification </h2>
      <span className="section_subtitle">My Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button  qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button  qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Bachelor of Technology</h3>
                <span className="qualification_subtitle">
                  Indian Institute of Information Technology - Jabalpur
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Senior Secondary School</h3>
                <span className="qualification_subtitle">
                  The Aryan International School - Varanasi
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Secondary School</h3>
                <span className="qualification_subtitle">
                  Sunbeam School - Narayanpur
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Fullstack Developer Intern
                </h3>
                <span className="qualification_subtitle">
                  IEEE Bombay Section - Remote
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2021 - Oct 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications