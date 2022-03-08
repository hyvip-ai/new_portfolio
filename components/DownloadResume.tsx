import Image from "next/image";
import React, { useState } from "react";
import classes from "../styles/skills.module.css";
function DownloadResume() {
  const [showGif, setShowGif] = useState(false);
  return (
    <>
      <div className={classes.downloadButton}>
        {!showGif ? (
          <a
            href="/Rajat_Mondal_Resume.pdf"
            download="Rajat Mondal Resume"
            onClick={() => {
              setShowGif(true);
            }}
          >
            <Image src="/dwnld.png" layout="fill" alt="Download resume" />
          </a>
        ) : (
          <Image src="/dwnldGif.gif" layout="fill" alt="Download resume" />
        )}
      </div>
    </>
  );
}

export default DownloadResume;
