import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About(props) {
  let details = props.details;

  function downloadCV() {
    if (details === undefined) {
      window.open("https://drive.google.com/drive/folders/1SCzZemnk-pCRNxf4_6K1XrjE1i8KS7yp?usp=sharing");
    } else {
      window.open(details.resumeUrl);
    }
  }

  if (details === undefined) {
    return (
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="about-title">About Me</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="about-text">
                I am a fourth year undergrad student pursuing Computer
                Engineering.An inquisitive student, a keen learner and a problem
                solver, always willing to dive deep into a problem for novel
                solutions. I look forward to challenging opportunities to
                redefine my potential and leave an impact.
                <br />
                <br />
                My key interest lies solely in sharing my technical expertise
                with people. I thoroughly enjoy tackling problems pertaining to
                technology and coming up with novel ideas. I also believe in
                Kata - the Japanese ideology of thinking before acting which
                enables me to be able to focus on not only continuous
                improvement but also innovation.
                <br />
                <br />
                Wanna know more about me? Check out my Resume.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <center>
                <span className="download-cv-bttn" onClick={downloadCV}>
                  <FontAwesomeIcon icon={faDownload} /> My Resume
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let aboutTitle = details.aboutTitle;
    let aboutText = details.aboutText;
    return (
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h1 className="about-title">{aboutTitle}</h1>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <p className="about-text">{aboutText}</p>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <center>
                <span className="download-cv-bttn" onClick={downloadCV}>
                  <FontAwesomeIcon icon={faDownload} /> My CV
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
