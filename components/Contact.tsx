import React from 'react';
import { Contact as ContactType } from '../types/all';
import classes from '../styles/contact.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import BlurImage from './BlurImage';
interface contactProps {
  contactDetails: ContactType;
}
function Contact(props: contactProps) {
  return (
    <>
      <h1 className='section_heading'>Contact Me</h1>
      <section className={`section ${classes.contact}`}>
        <a href='mailto:rm2932002@gmail.com'>
          <div className={classes.email}>
            <div className={classes.image}>
              <BlurImage
                src='/email.png'
                alt='Email'
                layout='responsive'
                height={64}
                width={64}
              />
            </div>
            <h1>rm2932002@gmail.com</h1>
          </div>
        </a>
        <a href='tel:6289703125'>
          <div className={classes.phone}>
            <div className={classes.image}>
              <BlurImage
                src='/mobile.png'
                alt='Email'
                layout='responsive'
                height={64}
                width={64}
              />
            </div>
            <h1>+916289703125</h1>
          </div>
        </a>
      </section>
      <section className={`section `}>
        <div className={classes.contactCard}>
          <div className={classes.left}>
            <Player autoplay loop src={props.contactDetails.lottieSrc}></Player>
          </div>
          <div className={classes.right}>
            <form
              action='https://formsubmit.co/rm2932002@gmail.com'
              method='POST'
            >
              <input type='text' placeholder='Name...' name='Name' required />
              <input type='email' placeholder='Email' name='Email' required />
              <textarea
                name='Message'
                placeholder='Message...'
                rows={4}
                required
              ></textarea>
              <button type='submit' aria-label="send mail">
                <div className={classes.text}>SEND</div>
                <span></span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
