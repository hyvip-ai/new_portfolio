import React, { Fragment, useEffect, useState } from 'react';
import { Projects } from '../types/all';
import classes from '../styles/works.module.css';
import WorkCard from '../Layout/WorkCrad';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import DrawingCard from './DrawingCard';
interface skillProps {
  projects: Projects[];
}
const projectTypes = [
  'Various',
  'React',
  'Angular',
  'FullStack',
  'Svelte',
  'Game',
  'Drawing',
];
function Works(props: skillProps) {
  const [active, setActive] = useState(null);
  const [activeProjects, setActiveProjects] = useState([]);
  useEffect(() => {
    let active = localStorage.getItem('active');
    active ? setActive(active) : setActive('Various');
  }, []);
  useEffect(() => {
    localStorage.setItem('active', active);
    let newProjects = props.projects.filter((project) => {
      return project.tags.includes(active);
    });
    setActiveProjects(newProjects);
  }, [active, props.projects]);
  return (
    <>
      <h1 className='section_heading'>Projects</h1>
      <div className={classes.switch}>
        {projectTypes.map((project) => {
          return (
            <span
              key={Math.random()}
              className={active === project ? classes.activeSwitch : ''}
              onClick={() => {
                setActive(project);
              }}
            >
              {project === 'Various' ? 'All' : project}
            </span>
          );
        })}
      </div>
      <section className='section'>
        <div className={classes.cards}>
          <TransitionGroup component={null}>
            {activeProjects.map((project: Projects) => {
              return (
                <CSSTransition
                  key={uuid()}
                  in={true}
                  timeout={300}
                  unmountOnExit
                  classNames='work-card'
                >
                  {project.tags[0] !== 'Drawing' ? (
                    <WorkCard work={project} active={active} />
                  ) : (
                    <DrawingCard drawing={project} />
                  )}
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
      </section>
    </>
  );
}

export default Works;
