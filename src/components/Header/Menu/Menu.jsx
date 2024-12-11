import styles from './Menu.module.scss';

function NavList({ links, className }) {
    return (
        <nav className={`${styles.menu__} ${styles.hiddenMobile} ${className}`}>
            <ul className={styles.menu__list}>
                {links.map((link, index) => {
                    return (
                        <li key={index} className={styles.menu__item}>
                            <a
                                className={styles.menu__link}
                                href="/"
                            >
                                {link.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default NavList;
