import React from "react";
import { Testimonial } from "../types/all";
import classes from "../styles/testimonials.module.css";

import TestiCard from "./TestiCard";
interface testiProps {
  testimonialData: Testimonial[];
}
function Testimonials(props: testiProps) {
  return (
    <>
      <h1 className="section_heading">Testimonials </h1>
      <section className="section">
        <div className={classes.testimonials}>
          {props.testimonialData.map((testimonial) => {
            return <TestiCard testiData={testimonial} key={Math.random()} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
