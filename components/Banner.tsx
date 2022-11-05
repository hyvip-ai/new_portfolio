import React, { useEffect } from 'react';
import { Banner } from '../types/all';
import classes from '../styles/banner.module.css';
import Typed from 'typed.js';
import BlurImage from './BlurImage';
import Image from 'next/image';
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
            <div className={classes.image}>
              <BlurImage
                src='/me_avatar_without_eyes.png'
                alt='Rajat Mondal'
                layout='fill'
                objectFit='contain'
                priority
              />
              <div className={classes.eyes}>
                <img
                  src='/eye.svg'
                  className={classes.eye}
                  alt='eye'
                  width={15}
                  height={21}
                />
                <img
                  src='/eye.svg'
                  className={classes.eye}
                  alt='eye'
                  width={15}
                  height={21}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.small}>
        <BlurImage
          src='/me_avatar_without_eyes.png'
          layout='fill'
          alt='Rajat Mondal'
          objectFit='contain'
        />
        <div className={classes.eyes}>
          <img
            src='/eye.svg'
            className={classes.eye}
            alt='eye'
            width={15}
            height={21}
          />
          <img
            src='/eye.svg'
            className={classes.eye}
            alt='eye'
            width={15}
            height={21}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
