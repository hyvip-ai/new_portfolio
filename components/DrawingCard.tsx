import React from 'react';
import { Projects } from '../types/all';
import classes from '../styles/works.module.css';
import BlurImage from './BlurImage';

interface DrawingCardProps {
  drawing: Projects;
}

function DrawingCard(props: DrawingCardProps) {
  return (
    <div className={classes.workCard}>
      <BlurImage
        src={props.drawing.url}
        alt='my_drawing'
        layout='responsive'
        width={170}
        height={220}
        objectFit='contain'
      />
    </div>
  );
}

export default DrawingCard;
