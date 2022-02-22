import React, { useEffect, useState } from "react";
import { Projects } from "../types/all";
import classes from "../styles/works.module.css";
import WorkCard from "../Layout/WorkCrad";
import { motion } from "framer-motion";
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
      <section className={`section`}>
        <div className={classes.cards}>
          {activeProjects.map((project) => {
            return (
              <motion.div key={project.id} layout className="motion">
                <WorkCard work={project} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Works;
