import { links } from '../../data/data';
import Navigation from './Navigation/Navigation';
import Body from './Body/Body';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <Navigation links={links}/>
                <Body />
                <div className={styles.footer__bottom}>
                    <span>© 2023 Positivus. All Rights Reserved.</span>
                    <a href="/">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
