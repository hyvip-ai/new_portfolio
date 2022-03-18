import React from "react";
import { Projects } from "../types/all";
import classes from "../styles/works.module.css";
import Image from "next/image";
import Tabs from "../components/Tabs";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface workCardProps {
  work: Projects;
  active: string;
}
function WorkCard(props: workCardProps) {
  const urlHandler = () => {
    if (!props.work.url) {
      alert(`${props.work.name} is not Hosted, Sorry :')`);
      return;
    } else {
      location.href = props.work.url;
    }
  };
  return (
    <div className={`${classes.workCard}`}>
      <div className={classes.image}>
        <Image
          src={props.work.img}
          alt={props.work.name}
          layout="responsive"
          height={230}
          width={238}
        />
        <div className={classes.badge}>
          {props.active === "Various" ? "All" : props.active}
        </div>
        <div className={classes.overlay}>
          <button>
            <a href={props.work.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
          <button onClick={urlHandler}>
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
      <div className={classes.data}>
        <h3>{props.work.name}</h3>
        <div className={classes.techStack}>
          {props.work.techStack.map((tech) => {
            return (
              <Tabs
                data={tech.tag}
                key={Math.random()}
                classname={tech.classname}
              />
            );
          })}
        </div>
        <p>{props.work.about}</p>
      </div>
    </div>
  );
}

export default WorkCard;
