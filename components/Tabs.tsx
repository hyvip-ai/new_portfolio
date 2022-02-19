import React from "react";
import classes from "../styles/works.module.css";

interface tabProps {
  data: string;
  classname: string;
}
function Tabs(props: tabProps) {
  return (
    <span className={`${classes.tech} ${props.classname}`}>{props.data}</span>
  );
}

export default Tabs;
