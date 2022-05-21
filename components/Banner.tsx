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
            <h1>{props.bannerData.pageIntro}</h1>
            <h3>{props.bannerData.me}</h3>
            <h3>
              <span className='types'></span>
            </h3>
          </div>
          <div className={classes.col}>
            <div className={classes.image}>
              <BlurImage
                src='/me_updated.jfif'
                alt='Rajat Mondal'
                layout='responsive'
                height={640}
                width={640}
                priority
              />
              <div className={classes.data}>
                <a href='mailto:rm2932002@gmail.com'>
                  {props.bannerData.imageOverlayText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.small}>
        <BlurImage
          src='/me_updated.jfif'
          layout='responsive'
          height={640}
          width={640}
          alt='Rajat Mondal'
        />
      </div>
    </>
  );
}

export default Banner;
