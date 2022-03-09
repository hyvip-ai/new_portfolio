import Image from "next/image";
import React, { useState } from "react";
import classes from "../styles/skills.module.css";
function DownloadResume() {
  const [showGif, setShowGif] = useState(false);
  return (
    <>
      {!showGif ? (
        <a
          href="/Rajat_Mondal_Resume.pdf"
          download="Rajat Mondal Resume"
          onClick={() => {
            setShowGif(true);
          }}
        >
          <div className={classes.downloadButton}>
            <Image
              src="/dwnld.png"
              layout="fill"
              alt="Download resume"
              priority
            />
          </div>
        </a>
      ) : (
        <div className={classes.downloadButton}>
          <Image src="/dwnldGif.gif" layout="fill" alt="Download resume" />
        </div>
      )}
    </>
  );
}

export default DownloadResume;
