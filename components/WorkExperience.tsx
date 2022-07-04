import React from "react";
import { Work } from "../types/all";
import classes from "../styles/experience.module.css";
interface workProps {
  workExperienceData: Work[];
}
function WorkExperience(props: workProps) {
  return (
    <>
      <h1 className="section_heading">Experience</h1>
      <section className="section">
        <ul className={classes.timeline}>
          {props.workExperienceData.map((work) => {
            return (
              <React.Fragment key={Math.random()}>
                <li className={classes.timeline_event}>
                  <label className={classes.timeline_event_icon}></label>
                  <div className={classes.timeline_event_copy}>
                    <p className={classes.timeline_event_thumbnail}>
                      {work.timeLine}
                    </p>
                    <h1 className={`${classes.h3}`}>{work.title}</h1>
                    <h1 className={`${classes.h4}`}>{work.name}</h1>
                    <p>{work.works}</p>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default WorkExperience;
