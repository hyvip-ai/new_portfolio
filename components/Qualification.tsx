import React from "react";
import { Qualification } from "../types/all";
import classes from "../styles/quaification.module.css";
interface qualProps {
  qualificationData: Qualification[];
}
function Qualification(props: qualProps) {
  return (
    <>
      <h1 className="section_heading">Qualification</h1>
      <section className="section">
        <div className={classes.row}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className={`${classes.timeline} ${classes.timeline_centered}`}>
              {props.qualificationData.map((qual) => {
                return (
                  <React.Fragment key={Math.random()}>
                    <li
                      className={`${classes.timeline_item} ${classes.period}`}
                    >
                      <div className={classes.timeline_info}></div>
                      <div className={classes.timeline_marker}></div>
                      <div className={classes.timeline_content}>
                        <h1
                          className={`${classes.timeline_title} ${classes.h2}`}
                        >
                          {qual.name}
                        </h1>
                      </div>
                    </li>
                    <li className={classes.timeline_item}>
                      <div className={classes.timeline_info}>
                        <span>{qual.timeline}</span>
                      </div>
                      <div className={classes.timeline_marker}></div>
                      <div className={classes.timeline_content}>
                        <h1
                          className={`${classes.timeline_title} ${classes.h3}`}
                        >
                          {qual.board}
                        </h1>
                        <p>{qual.place}</p>
                        <p>
                          {qual.gradeUnit}&nbsp;:&nbsp;<b>{qual.grade}</b>
                        </p>
                      </div>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Qualification;
