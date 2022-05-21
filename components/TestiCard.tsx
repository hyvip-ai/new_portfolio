import React from 'react';
import classes from '../styles/testimonials.module.css';
import { Testimonial } from '../types/all';
import BlurImage from './BlurImage';
interface testiCardProps {
  testiData: Testimonial;
}
function TestiCard(props: testiCardProps) {
  return (
    <div className={classes.testicard}>
      <div className={classes.data}>{props.testiData.testimonial}</div>
      <div className={classes.person}>
        <div className={classes.wave}>
          <svg viewBox='0 0 500 260'>
            <path
              d='M-1.12,66.61 C327.88,-52.78 268.06,194.89 501.69,109.03 L500.00,260.00 L0.00,260.00 Z'
              className={classes.card_wave}
            ></path>
          </svg>
        </div>
        <div className={classes.image}>
          <BlurImage
            src={props.testiData.imageURL}
            alt={props.testiData.name}
            layout='responsive'
            height={400}
            width={400}
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
