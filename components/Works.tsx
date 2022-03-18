import React, { Fragment, useEffect, useState } from "react";
import { Projects } from "../types/all";
import classes from "../styles/works.module.css";
import WorkCard from "../Layout/WorkCrad";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";
interface skillProps {
  projects: Projects[];
}
const projectTypes = [
  "Various",
  "React",
  "Angular",
  "FullStack",
  "Svelte",
  "Game",
];
function Works(props: skillProps) {
  const [active, setActive] = useState(null);
  const [activeProjects, setActiveProjects] = useState([]);
  useEffect(() => {
    let active = localStorage.getItem("active");
    active ? setActive(active) : setActive("Various");
  }, []);
  useEffect(() => {
    localStorage.setItem("active", active);
    let newProjects = props.projects.filter((project) => {
      return project.tags.includes(active);
    });
    setActiveProjects(newProjects);
  }, [active, props.projects]);
  return (
    <>
      <h1 className="section_heading">Projects</h1>
      <div className={classes.switch}>
        {projectTypes.map((project) => {
          return (
            <span
              key={Math.random()}
              className={active === project ? classes.activeSwitch : ""}
              onClick={() => {
                setActive(project);
              }}
            >
              {project}
            </span>
          );
        })}
      </div>
      <section className="section">
        <TransitionGroup className={classes.cards}>
          {activeProjects.map((project: Projects) => {
            return (
              <CSSTransition
                key={uuid()}
                in={true}
                timeout={300}
                unmountOnExit
                classNames="work-card"
              >
                <WorkCard work={project} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </section>
    </>
  );
}

export default Works;
