import "./Hero.css";
import Socials from "../../Data/Socials";

function Hero(props) {
  let details = props.details;
  if (details == null) {
    return (
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <center>
                <img
                  width="400"
                  className="img-responsive img-circle img-laptop"
                  src="https://avatars.githubusercontent.com/u/68069642?s=400&v=4"
                  alt="Kumar Chitransh"
                />
                <img
                  width="300"
                  className="img-responsive img-circle img-mobile"
                  src="https://avatars.githubusercontent.com/u/68069642?s=400&v=4"
                  alt="Kumar Chitransh"
                />
              </center>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1 className="hero-title">Kumar Chitransh</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <p className="hero-position">Undergrad Student</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <p className="hero-position-location">
                Bharati Vidyapeeth Deemed University College of Engineering Pune
              </p>
            </div>
          </div>
          <br />
          <Socials />
        </div>
      </div>
    );
  } else {
    let name = details.name;
    let position = details.position;
    let institute = details.institute;
    let socials = details.socials;
    let profileImageUrl = details.profileImageUrl;
    return (
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <center>
                <img
                  width="400"
                  className="img-responsive img-circle img-laptop"
                  src={profileImageUrl}
                  alt="Dewansh Rawat"
                />
                <img
                  width="300"
                  className="img-responsive img-circle img-mobile"
                  src={profileImageUrl}
                  alt="Dewansh Rawat"
                />
              </center>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1 className="hero-title">{name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <p className="hero-position">{position}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <p className="hero-position-location">{institute}</p>
            </div>
          </div>
          <br />
          <Socials socials={socials} />
        </div>
      </div>
    );
  }
}

export default Hero;
