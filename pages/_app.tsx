import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  const doLog = () => {
    fetch('/cat.txt')
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(`${text} \n\n
        
  Hey there 👋, curious!
You're probably wondering how cool this site is.

  If you think it's interesting and want to see the code behind it,
I've placed it in the open at https://github.com/hyvip-ai/new_portfolio.
Feel free to check it out!

  I can do even better, so, if your company is currently
looking for someone with my kind of skills, feel free to hit me up
on https://www.linkedin.com/in/rajat-mondal-a7abb8199/ or via rm2932002@gmail.com ✨.
    `);
      });
  };
  useEffect(() => {
    doLog();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
