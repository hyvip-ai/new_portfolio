import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { About } from "../types/all";
import classes from "../styles/about.module.css";
interface aboutProps {
  aboutData: About;
}
function About(props: aboutProps) {
  return (
    <>
      <h1 className="section_heading">About</h1>

      <section className={`section ${classes.row}`}>
        <div className={classes.lottie}>
          <Player autoplay loop src={props.aboutData.lottieData.src}></Player>
        </div>
        <div className={classes.data}>
          <h1 className={classes.heading}>{props.aboutData.title}</h1>
          <p
            className={classes.para}
            dangerouslySetInnerHTML={{ __html: props.aboutData.description }}
          ></p>
        </div>
      </section>
    </>
  );
}
export default About;
