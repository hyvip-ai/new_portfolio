import React from "react";
import { Skill } from "../types/all";
import SkillBtn from "./SkillBtn";
import classes from "../styles/skills.module.css";
import DownloadResume from "./DownloadResume";
interface skillProps {
  skills: Skill[];
}
function Skills(props: skillProps) {
  return (
    <>
      <h1 className="section_heading">Skills</h1>
      <section className={`section ${classes.skillSection}`}>
        <div className={classes.skills}>
          {props.skills.map((skill) => {
            return <SkillBtn skill={skill} key={Math.random()} />;
          })}
        </div>
      </section>
      <div className={classes.download_resume_heading_outer}>
        <h1 className={classes.download_resume_heading}>Download Resume</h1>
      </div>
      <section className="section">
        <DownloadResume />
      </section>
    </>
  );
}

export default Skills;
