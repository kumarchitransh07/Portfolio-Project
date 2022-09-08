import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
  faSpotify,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Socials(props) {
  let socials = props.socials;
  function triggerSocialLink(platform) {
    if (socials === undefined) {
      switch (platform) {
        case "mail":
          window.open("mailto:chitransh.sudhir@gmail.com");
          break;
        case "github":
          window.open("https://github.com/kumarchitransh07");
          break;
        // case "facebook":
        //     window.open("")
        //     break;
        // case "medium":
        //     window.open("")
        //     break;
        // case "spotify":
        //     window.open("")
        //     break;
        case "instagram":
          window.open("https://www.instagram.com/kumarschitransh/");
          break;
        case "linkedin":
          window.open("https://www.linkedin.com/in/kumarchitransh/");
          break;
        case "twitter":
          window.open("https://www.twitter.com/kumarchitransh7/");
          break;
        default:
          break;
      }
    } else {
      switch (platform) {
        case "mail":
          window.open("mailto:" + socials.mail);
          break;
        case "github":
          window.open(socials.github);
          break;
        // case "facebook":
        //   window.open(socials.facebook);
        //   break;
        // case "medium":
        //   window.open(socials.medium);
        //   break;
        // case "spotify":
        //   window.open(socials.spotify);
        //   break;
        case "instagram":
          window.open(socials.instagram);
          break;
        case "linkedin":
          window.open(socials.linkedin);
          break;
        case "twitter":
          window.open(socials.twitter);
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <center>
          <ul className="list-inline">
            <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("mail")}
                className="socials-icon-dark"
                icon={faEnvelope}
              />
            </li>
            <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("github")}
                className="socials-icon-dark"
                icon={faGithub}
              />
            </li>
            <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("linkedin")}
                className="socials-icon-dark"
                icon={faLinkedin}
              />
            </li>
            {/* <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("facebook")}
                className="socials-icon-dark"
                icon={faFacebook}
              />
            </li> */}
            <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("instagram")}
                className="socials-icon-dark"
                icon={faInstagram}
              />
            </li>
            <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("twitter")}
                className="socials-icon-dark"
                icon={faTwitter}
              />
            </li>
            {/* <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("spotify")}
                className="socials-icon-dark"
                icon={faSpotify}
              />
            </li> */}
            {/* <li>
              <FontAwesomeIcon
                onClick={() => triggerSocialLink("medium")}
                className="socials-icon-dark"
                icon={faMedium}
              />
            </li> */}
          </ul>
        </center>
      </div>
    </div>
  );
}

export default Socials;
