import React, { useEffect } from 'react';
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
                src='/me_avatar_website.svg'
                alt='Rajat Mondal'
                layout='fixed'
                height={700}
                width={700}
                priority
                className={classes.img}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={classes.small}>
        <BlurImage
          src='/me_avatar_website.svg'
          layout='fill'
          alt='Rajat Mondal'
          objectFit='contain'
        />
      </div>
    </>
  );
}

export default Banner;
