import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

import styles from './MenuMobile.module.scss';

function MenuMobile({ links, className, isMenuOpen, setIsMenuOpen }) {
    const visibleClass = `${isMenuOpen ? styles.visible : ''}`;

    const closeMenu = (e) => {
        console.log(e.target);

        if (e.target.classList.contains(styles.modal)) {
            setIsMenuOpen(false);
            return;
        }

        if (
            e.target.classList.contains(styles.menuMobile__item) ||
            e.target.closest(`.${styles.menuMobile__item}`)
        ) {
            setIsMenuOpen(false);
            return;
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add(styles.bodyNoScroll);
        } else {
            document.body.classList.remove(styles.bodyNoScroll);
        }

        return () => {
            document.body.classList.remove(styles.bodyNoScroll);
        };
    }, [isMenuOpen]);

    return (
        <div
            className={`${styles.modal} ${className} ${visibleClass}`}
            onClick={closeMenu}
        >
            <nav className={`${styles.menuMobile} ${visibleClass}`}>
                <ul className={styles.menuMobile__list}>
                    {links.map((link, index) => {
                        return (
                            <li key={index} className={styles.menuMobile__item}>
                                <a className={styles.menuMobile__link} href="/">
                                    {link.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className={styles.menuMobile__closeButton}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <IoCloseSharp />
                </button>
            </nav>
        </div>
    );
}

export default MenuMobile;
