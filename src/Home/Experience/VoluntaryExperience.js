import "./VoluntaryExperience.css";
import ExperienceCard from "./ExperienceCard";

function VoluntaryExperience(props) {
  let { experienceDetails } = props;
  if (experienceDetails == null) {
    let experienceRows = [];
    let details = [
      {
        title: "Subject Matter Expert",
        startDate: "1st June 2021",
        endDate: "Currently",
        organisation: "Chegg Inc.",
        details:
          "I am a subject matter expert for the subject of Computer Science and Engineering. I help students with their assignments and projects.",
        orgUrl: "www.chegg.com",
      },
      {
        title: "Contributor",
        startDate: "1st September 2021",
        endDate: "1st November 2021",
        organisation: "GirlScript Foundation",
        details:
          "I am a contributor for the GirlScript Winter of Contributing. I have contributed in domain of web development.My task was to write documentation for the varrious technologies used in web development along with other contributors.",
        orgUrl: "https://www.gssoc.tech/",
      },
      {
        title: "Junior Associate",
        startDate: "1st August 2019",
        endDate: "1st Feburary 2020",
        orgUrl: "",
        organisation: "Entrepreneurship Development Cell, BV(DU)COEP",
        details:
          "I was a junior associate in the Entrepreneurship Development Cell, BV(DU)COEP. I was responsible for the marketing of the events conducted by the cell. I was also responsible for the documentation of the events.Explored and worked in various domains of the Cell: PR team, Marketing Team, Stock Trading team.I have managed 2 major events with over 400 attendees during my tenure in my EDC.",
      },
      {
        title: "Library Head",
        startDate: "1st April 2022",
        endDate: "Present",
        orgUrl: "www.bvucoep.ac.in",
        organisation:
          "Association of Computer Engineering Students, BVUCOE, Pune",
        details:
          "I am the Library Head of the Association of Computer Engineering Students, BVUCOE, Pune.My key role is to work with other teams in managing and executing various events and workshops of the ACES.",
      },
    ];
    details.forEach((element) => {
      let newExperienceCard = (
        <ExperienceCard key={element.title} {...element} theme="dark" />
      );
      experienceRows.push(newExperienceCard);
    });
    return (
      <div className="voluntary-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="voluntary-experience-title-dark">
                Voluntary Experience
              </h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="voluntary-experience-text-dark">
                In my free available time, I volunteer with different
                communities to help organise different events with communities.
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
        <ExperienceCard key={element.title} {...element} theme="dark" />
      );
      experienceRows.push(newExperienceCard);
    });
    return (
      <div className="voluntary-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="voluntary-experience-title-dark">
                Voluntary Experience
              </h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="voluntary-experience-text-dark">
                In my free available time, I volunteer with different
                communities to help organise different events with communities.
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

export default VoluntaryExperience;
