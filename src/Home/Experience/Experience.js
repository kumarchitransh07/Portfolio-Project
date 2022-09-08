import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience(props) {
  let { experienceDetails } = props;
  if (experienceDetails == null) {
    let experienceRows = [];
    let experienceDetailsArr = [
      {
        title: "Web Development Intern",
        startDate: "1st November 2021",
        endDate: "7th December 2021",
        organisation: "The Sparks Foundation",
        details:
          "My work involves to complete three tasks: 1. Basic Banking System 2. Payment Gateway Integration 3. E-commerce Website",
        orgUrl: "https://www.thesparksfoundationsingapore.org/",
      },
    ];
    experienceDetailsArr.forEach((element) => {
      let newExperienceCard = (
        <ExperienceCard key={element.title} {...element} theme="light" />
      );
      experienceRows.push(newExperienceCard);
    });
    return (
      <div className="experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="experience-title">Experience</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="experience-text">
                I like to work in teams. I like to explore new technologies and
                coming up with novel ideas. I am a quick learner and I am always
                looking for opportunities to learn and grow.
              </p>
            </div>
          </div>
          <br />
          <br />
          {experienceRows}
        </div>
      </div>
    );
  } else {
    let experienceRows = [];
    experienceDetails.forEach((element) => {
      let newExperienceCard = (
        <ExperienceCard key={element.title} {...element} theme="light" />
      );
      experienceRows.push(newExperienceCard);
    });
    return (
      <div className="experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="experience-title">Experience</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="experience-text">
                I like to work in teams. I like to explore new technologies and
                coming up with novel ideas. I am a quick learner and I am always
                looking for opportunities to learn and grow.
              </p>
            </div>
          </div>
          <br />
          <br />
          {experienceRows}
        </div>
      </div>
    );
  }
}

export default Experience;
