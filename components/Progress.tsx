import React, { useEffect } from "react";
import classes from "../styles/progress.module.css";
function Progress() {
  useEffect(() => {
    let progress = document.getElementById("progress");
    window.addEventListener("scroll", (e) => {
      let screenHeight = document.documentElement.clientHeight;
      let totalHeight = document.documentElement.scrollHeight;
      let totalScrollableHeight = totalHeight - screenHeight;
      let scrolled = document.documentElement.scrollTop;
      progress.style.width = `${(scrolled / totalScrollableHeight) * 100}%`;
    });
  }, []);
  return <div className={classes.progress} id="progress"></div>;
}

export default Progress;
