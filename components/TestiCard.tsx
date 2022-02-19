import Image from "next/image";
import React from "react";
import classes from "../styles/testimonials.module.css";
import { Testimonial } from "../types/all";
interface testiCardProps {
  testiData: Testimonial;
}
function TestiCard(props: testiCardProps) {
  return (
    <div className={classes.testicard}>
      <div className={classes.data}>{props.testiData.testimonial}</div>
      <div className={classes.person}>
        <div className={classes.image}>
          <Image
            src={props.testiData.imageURL}
            alt={props.testiData.name}
            layout="responsive"
            height={400}
            width={400}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={classes.personDetails}>
          <h3>{props.testiData.name}</h3>
          <p>{props.testiData.position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestiCard;
