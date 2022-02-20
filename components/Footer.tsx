import React from "react";
import { Social } from "../types/all";
import classes from "../styles/footer.module.css";
import {
  faLinkedin,
  faNpm,
  faHackerrank,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface footerProps {
  socialLinks: Social;
}
function Footer(props: footerProps) {
  return (
    <React.Fragment>
      <h1
        className="section_heading"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        Connect With ME
      </h1>
      <section className={`section ${classes.footer}`}>
        <a
          href={props.socialLinks.linkedIn}
          className={`${classes.link} ${classes.linkedin}`}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href={props.socialLinks.github}
          className={`${classes.link} ${classes.github}`}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href={props.socialLinks.hackerrank}
          className={`${classes.link} ${classes.hackerrank}`}
        >
          <FontAwesomeIcon icon={faHackerrank} />
        </a>
        <a
          href={props.socialLinks.npm}
          className={`${classes.link} ${classes.npm}`}
        >
          <FontAwesomeIcon icon={faNpm} />
        </a>
      </section>
    </React.Fragment>
  );
}

export default Footer;
