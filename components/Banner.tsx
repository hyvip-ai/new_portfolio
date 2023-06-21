/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect } from 'react';
import { Banner } from '../types/all';
import classes from '../styles/banner.module.css';
import Typed from 'typed.js';
import BlurImage from './BlurImage';
interface bannerProps {
  bannerData: Banner;
}

function Banner(props: bannerProps) {
  useEffect(() => {
    new Typed('.types', {
      strings: props.bannerData.typing,
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: '_',
      autoInsertCss: true,
      backSpeed: 100,
    });
  }, [props.bannerData.typing]);

  const angle = useCallback((cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const angle = (rad * 180) / Math.PI;
    return angle;
  }, []);

  const rotateFunction = useCallback(
    (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const imageContainerArray = document.getElementsByClassName('image');
      let imageContainer = null;
      if (window.innerWidth <= 768) {
        imageContainer = imageContainerArray[1];
      } else {
        imageContainer = imageContainerArray[0];
      }
      const rect = imageContainer.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.height / 2;
      const angleCss = angle(mouseX, mouseY, anchorX, anchorY) - 100;
      document.querySelectorAll('.eye').forEach((eye) => {
        (eye as HTMLElement).style.transform = `rotate(${angleCss}deg)`;
      });
    },
    [angle]
  );

  useEffect(() => {
    document.addEventListener('mousemove', rotateFunction);
    return () => {
      document.removeEventListener('mousemove', rotateFunction);
    };
  }, [rotateFunction]);
  return (
    <>
      <section className={`section ${classes.banner} pt`}>
        <div className={classes.row}>
          <div className={`${classes.col} ${classes.first_col}`}>
            <h1 className={`${classes.h1}`}>{props.bannerData.pageIntro}</h1>
            <h1 className={`${classes.h3}`}>{props.bannerData.me}</h1>
            <h1 className={`${classes.h3}`}>
              <span className='types'></span>
            </h1>
          </div>
          <div className={classes.col}>
            <div className={`${classes.image} image`}>
              <div className={classes.morph}></div>
              <BlurImage
                src='/me_avatar_without_eyes.png'
                alt='Rajat Mondal'
                layout='fill'
                objectFit='contain'
                priority
              />
              <div className={classes.eyes}>
                <div
                  className={`eye ${classes.eye}`}
                  style={{ transform: 'rotate(0deg)' }}
                ></div>
                <div
                  className={`eye ${classes.eye}`}
                  style={{ transform: 'rotate(0deg)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`${classes.small} image`}>
        <div className={classes.morph}></div>
        <BlurImage
          src='/me_avatar_without_eyes.png'
          layout='fill'
          alt='Rajat Mondal'
          objectFit='contain'
        />
        <div className={classes.eyes}>
          <div
            className={`eye ${classes.eye}`}
            style={{ transform: 'rotate(0deg)' }}
          ></div>
          <div
            className={`eye ${classes.eye}`}
            style={{ transform: 'rotate(0deg)' }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
