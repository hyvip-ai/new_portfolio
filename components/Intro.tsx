import React, { useEffect } from "react";
import classes from "../styles/intro.module.css";
import { TimelineLite } from "gsap/dist/gsap";
function Intro() {
  useEffect(() => {
    const tl = new TimelineLite({
      paused: true,
      onComplete: () => {
        setTimeout(() => {
          document.getElementById("intro").style.display = "none";
        });
      },
    });
    tl.fromTo(".animate", { y: 100 }, { y: 0, stagger: 0.2 })
      .to(
        ".animate",
        {
          y: -100,
          stagger: 0.2,
        },
        "+=0.7"
      )
      .to(".intro", { height: 0 }, "+=0.3");
    tl.play();
  }, []);
  return (
    <div className={`${classes.intro_outer} intro`} id="intro">
      <div className={classes.intro_inner}>
        <div className={classes.text}>
          <h1 className="animate">while(alive) &#123;</h1>
        </div>
        <div className={classes.text}>
          <h1 className="animate">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eat();
          </h1>
        </div>
        <div className={classes.text}>
          <h1 className="animate">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sleep();
          </h1>
        </div>
        <div className={classes.text}>
          <h1 className="animate">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code();
          </h1>
        </div>
        <div className={classes.text}>
          <h1 className="animate">&#125;</h1>
        </div>
      </div>
    </div>
  );
}

export default Intro;
