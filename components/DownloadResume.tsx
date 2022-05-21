import React, { useState } from 'react';
import classes from '../styles/skills.module.css';
import BlurImage from './BlurImage';
function DownloadResume() {
  const [showGif, setShowGif] = useState(false);
  return (
    <>
      {!showGif ? (
        <a
          href='/Rajat Mondal Resume.pdf'
          download='Rajat Mondal Resume'
          onClick={() => {
            setShowGif(true);
          }}
        >
          <div className={classes.downloadButton}>
            <BlurImage
              src='/dwnld.png'
              layout='fill'
              alt='Download resume'
              priority
            />
          </div>
        </a>
      ) : (
        <div className={classes.downloadButton}>
          <BlurImage src='/dwnldGif.gif' layout='fill' alt='Download resume' />
        </div>
      )}
    </>
  );
}

export default DownloadResume;
