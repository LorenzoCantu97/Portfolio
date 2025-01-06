import React from 'react';
import { getImageUrl } from '../../util';
import styles from './About.module.css';


export const About = () => {

    return (
        <section className = {styles.container} id="about">
            <h2 className = {styles.title}>About</h2>
            <div className = {styles.content}>
                <img
                    className = {styles.aboutImage}
                    src = {getImageUrl("/assets/about/aboutImage.png")}
                    alt = "aboutImage"
                />
                <ul className = {styles.aboutItems}>
                    <li className = {styles.aboutItem}>
                        <img 
                            src = {getImageUrl("/assets/about/cursorIcon.png")}
                            alt = "Cursor Icon"
                        />
                        <div classname = {styles.aboutItemText}>
                            <h3>FrontEnd Developer</h3>
                            <p>I'm a frontend developer with experience in builidng responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className = {styles.aboutItem}>
                        <img 
                            src = {getImageUrl("/assets/about/serverIcon.png")}
                            alt = "Server Icon"
                        />
                        <div className = {styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className = {styles.aboutItem}>
                        <img 
                            src={getImageUrl("/assets/about/uiIcon.png")}
                            alt = "UI Icon"    
                        />
                        <div className = {styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}