import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../util.js';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Lorenzo !</h1>
                <p className={styles.description}>I'm a full-stack developer with 3 years of experience</p>
                <a className={styles.contactBtn} href="mailto:letocdg97@gmail.com">Contact Me</a>
            </div>
            <img 
                className={styles.heroImg}
                src={getImageUrl('/assets/hero/heroImage.png')} 
                alt="HeroImage" 
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}