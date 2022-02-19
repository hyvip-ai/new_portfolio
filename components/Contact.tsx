import React from "react";
import { Contact as ContactType } from "../types/all";
import classes from "../styles/contact.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
interface contactProps {
  contactDetails: ContactType;
}
function Contact(props: contactProps) {
  return (
    <>
      <h1 className="section_heading">Contact Me</h1>
      <section className="section">
        <div className={classes.contactCard}>
          <div className={classes.left}>
            <Player autoplay loop src={props.contactDetails.lottieSrc}></Player>
          </div>
          <div className={classes.right}>
            <form>
              <input type="text" placeholder="Name..." />
              <input type="email" placeholder="Email" />
              <textarea name="" placeholder="Message..." rows={4}></textarea>
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
