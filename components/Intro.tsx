import React, { Dispatch, SetStateAction, useEffect } from 'react';
import classes from '../styles/intro.module.css';
import { TimelineLite } from 'gsap/dist/gsap';
interface IntroProps {
  setIntroCompleted: Dispatch<SetStateAction<boolean>>;
}
function Intro({ setIntroCompleted }: IntroProps) {
  useEffect(() => {
    const tl = new TimelineLite({
      paused: true,
      onComplete: () => {
        setTimeout(() => {
          setIntroCompleted(true);
        });
      },
    });
    tl.to('.wavesAnimation', { top: '0%', duration: 4.7 })
      .to('.wavesAnimation', { opacity: 0, duration: 0 })
      .to('#intro', { backgroundColor: 'rgb(22,22,22)', duration: 0 })
      .to('.text_container', { opacity: 0, duration: 0.3 }, '-=0.2')
      .fromTo('.animate', { y: 100 }, { y: 0, stagger: 0.2 })
      .fromTo('.comments', { opacity: 0 }, { opacity: 1 })
      .fromTo('.animateColor', { color: '#fff' }, { color: '#4b4b4b' }, '-=0.5')
      .fromTo('.lineThrough', { width: '0%' }, { width: '100%' }, '-=0.4')
      .to(
        '.animate',
        {
          y: -100,
          stagger: 0.2,
        },
        '+=0.7'
      )
      .to('.intro', { height: 0 }, '+=0.3');
    tl.play();
  }, [setIntroCompleted]);
  return (
    <>
      <div className='text_container'>
        <div className='loading'>
          <div className='loading__letter'>L</div>
          <div className='loading__letter'>o</div>
          <div className='loading__letter'>a</div>
          <div className='loading__letter'>d</div>
          <div className='loading__letter'>i</div>
          <div className='loading__letter'>n</div>
          <div className='loading__letter'>g</div>
          <div className='loading__letter'>.</div>
          <div className='loading__letter'>.</div>
          <div className='loading__letter'>.</div>
        </div>
      </div>
      <div className='wavesAnimation'>
        <svg
          className='waves'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax'>
            <use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(0,0,0,0.7)' />
            <use xlinkHref='#gentle-wave' x='48' y='3' fill='rgba(5,5,5,0.5)' />
            <use xlinkHref='#gentle-wave' x='48' y='5' fill='rgba(5,5,5,0.3)' />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='rgba(22,22,22)' />
          </g>
        </svg>
        <div className='color'></div>
      </div>
      <div className={`${classes.intro_outer} intro`} id='intro'>
        <div className={classes.intro_inner}>
          <div className={classes.text}>
            <h1 className='animate'>while(alive) &#123;</h1>
          </div>
          <div className={classes.text}>
            <h1 className='animate'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eat(&nbsp;);
            </h1>
          </div>
          <div className={classes.text}>
            <h1 className='animate animateColor'>
              <span className='comments'>{'//'}</span>
              &nbsp;&nbsp;sleep(&nbsp;);
              <div className='lineThrough'></div>
            </h1>
          </div>
          <div className={classes.text}>
            <h1 className='animate'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code(&nbsp;);
            </h1>
          </div>
          <div className={classes.text}>
            <h1 className='animate'>&#125;</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
