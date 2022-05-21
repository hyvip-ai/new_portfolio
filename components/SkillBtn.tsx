import React from 'react';
import classes from '../styles/skills.module.css';
import { Skill } from '../types/all';
import BlurImage from './BlurImage';
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
        <BlurImage
          src={props.skill.image}
          alt={props.skill.name}
          layout='responsive'
          height={45}
          width={45}
        />
      </div>
      <p>{props.skill.name}</p>
    </div>
  );
}

export default SkillBtn;
