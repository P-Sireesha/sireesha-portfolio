import styles from '../Styles/HeroStyles.module.css';
import heroImg from '../assets/Design uten navn.png';
import CV from '../assets/cv.pdf';
import themeIcon from '../assets/moon.svg';
import twitterIcon from '../assets/twitter-light.svg';
import githubIcon from '../assets/github-light.svg';
import linkedinIcon from '../assets/linkedin-light.svg';

function Hero() {


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Pammi Sireesha"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sireesha
          <br />
          Pammi 
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
