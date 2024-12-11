import Button from '../UI/Button/Button';
import Menu from './Menu/Menu';
import BurgerButton from '../UI/BurgerButton/BurgerButton';
import { useState } from 'react';
import MenuMobile from './MenuMobile/MenuMobile';
import { links } from '../../data/data';
import styles from './Header.module.scss';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleModalMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            <a className={styles.header__logo} href="/">
                <img src="./images/logo-black.svg" alt="Logo Positivus" loading="lazy" />
            </a>
            <Menu links={links} className={styles.menu} />
            <Button variant="transparent" className={styles.button} type="button">
                Request a quote
            </Button>

            <MenuMobile
                className={styles.menuMobile}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                links={links}
            />
            <BurgerButton
                className={styles.burgerButton}
                onToggleMenu={toggleModalMenu}
                isMenuOpen={isMenuOpen}
            />
        </header>
    );
}

export default Header;
