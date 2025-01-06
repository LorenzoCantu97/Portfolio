import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../util';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className = {styles.text}>
                <h2>Contact</h2>
                <p>Fell free to react out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("/assets/contact/emailIcon.png")}
                        alt="Email Icon"
                    />
                    <a href="mailto:letocdg97@gmail.com" target='_blank'>letocdg97@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("/assets/contact/linkedinIcon.png")}
                        alt="LinkedIn Icon"
                    />
                    <a href="https://www.linkedin.com/in/lorenzo-cant%C3%BA-de-la-garza-3b3534239/" target='_blank'>Linkedin.com/LorenzoCantu</a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("/assets/contact/githubIcon.png")}
                        alt="Github Icon"
                    />
                    <a href="https://github.com/LorenzoCantu97" target='_blank'>github.com/LorenzoCantu97</a>
                </li>
            </ul>
        </footer>
    );
};