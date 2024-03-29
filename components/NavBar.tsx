import React, { useEffect, useMemo, useRef, useState } from 'react';
import classes from '../styles/navbar.module.css';
import { TimelineLite } from 'gsap/dist/gsap';
import { useRouter } from 'next/router';
function NavBar() {
  let nav = useRef();
  let bar = useRef();
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [asPath, setAsPath] = useState('home');
  const tl = useMemo(() => {
    return new TimelineLite({ paused: true });
  }, []);
  useEffect(() => {
    tl.to('#film', { bottom: '0%', duration: 1 }).fromTo(
      '.link_anim',
      { y: 100 },
      { y: 0, duration: 0.3, stagger: 0.3 }
    );
  }, [tl]);
  const navHandler = (path: string) => {
    if (path) {
      setAsPath(path);
    }
    if (!navOpen) {
      tl.play();
      setNavOpen((prev) => {
        return !prev;
      });
    } else {
      tl.reverse();
      setNavOpen((prev) => {
        return !prev;
      });
    }
  };

  useEffect(() => {
    if (router.asPath.slice(2)) {
      setAsPath(router.asPath.slice(2));
    } else {
      setAsPath('home');
    }
  }, [router.asPath]);

  return (
    <>
      <nav id='my_nav' ref={nav} className={classes.nav_bar}>
        <div className={classes.brand}>
          <h1>Rajat Mondal</h1>
        </div>
        <div className={classes.nav_icon} onClick={() => navHandler('')}>
          <div
            id='bar_icon'
            ref={bar}
            className={`${classes.bars} ${navOpen ? classes.bar_open : ''}`}
          ></div>
        </div>
      </nav>
      <div id='film' className={classes.navbar_film}>
        <div className={classes.links}>
          <a
            href='#home'
            className={classes.link}
            onClick={() => navHandler('home')}
          >
            <span
              className={`link_anim ${classes.link_anim} ${
                asPath.includes('home') ? classes.active : ''
              }`}
            >
              Home
            </span>
          </a>
          <a
            href='#about'
            className={classes.link}
            onClick={() => navHandler('about')}
          >
            <span
              className={`link_anim ${classes.link_anim} ${
                asPath.includes('about') ? classes.active : ''
              }`}
            >
              About
            </span>
          </a>
          <a
            href='#skills'
            className={classes.link}
            onClick={() => navHandler('skills')}
          >
            <span
              className={`link_anim ${classes.link_anim} ${
                asPath.includes('skills') ? classes.active : ''
              }`}
            >
              Skills
            </span>
          </a>
          <a
            href='#projects'
            className={classes.link}
            onClick={() => navHandler('projects')}
          >
            <span
              className={`link_anim ${classes.link_anim} ${
                asPath.includes('projects') ? classes.active : ''
              }`}
            >
              Projects
            </span>
          </a>
          <a
            href='#contact'
            className={classes.link}
            onClick={() => navHandler('contact')}
          >
            <span
              className={`link_anim ${classes.link_anim} ${
                asPath.includes('contact') ? classes.active : ''
              } `}
            >
              Contact
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
