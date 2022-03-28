import Image from "next/image";
import React from "react";
import classes from "../styles/skills.module.css";
import { Skill } from "../types/all";
interface skillProps {
  skill: Skill;
}
function SkillBtn(props: skillProps) {
  return (
    <div>
      <div
        className={`${classes.skill_btn} ${props.skill.name}`}
        style={{ backgroundColor: props.skill.bgColor }}
      >
        <Image
          src={props.skill.image}
          alt={props.skill.name}
          layout="responsive"
          height={45}
          width={45}
          objectFit="cover"
        />
      </div>
      <p>{props.skill.name}</p>
    </div>
  );
}

export default SkillBtn;
