import Button from '../UI/Button/Button';
import Partners from './Partners/Partners';
import styles from './Hero.module.scss';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__main}>
                <div className={styles.hero__body}>
                    <h1>Navigating the digital landscape for success</h1>
                    <p>
                        Our digital marketing agency helps businesses grow and succeed
                        online through a range of services including SEO, PPC, social
                        media marketing, and content creation.
                    </p>
                    <Button children="Book a consultation" />
                </div>
                <div className={styles.hero__image}>
                    <img
                        className={styles.hero__image}
                        src="images/hero.svg"
                        alt="Hero"
                    />
                </div>
            </div>
            <Partners />
        </section>
    );
}

export default Hero;
