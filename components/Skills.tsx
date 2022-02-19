import React from "react";
import { Skill } from "../types/all";
import SkillBtn from "./SkillBtn";
import classes from "../styles/skills.module.css";
interface skillProps {
  skills: Skill[];
}
function Skills(props: skillProps) {
  return (
    <>
      <h1 className="section_heading">Skills</h1>
      <section className="section">
        <div className={classes.skills}>
          {props.skills.map((skill) => {
            return <SkillBtn skill={skill} key={Math.random()} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Skills;
