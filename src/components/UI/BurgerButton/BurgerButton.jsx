import styles from './BurgerButton.module.scss';

function BurgerButton({ className, onToggleMenu, isMenuOpen }) {
    return (
        <div
            className={`${styles.BurgerButton} 
            ${isMenuOpen ? styles.active : ''} 
            ${className}`}
            onClick={onToggleMenu}
        >
            <span></span>
        </div>
    );
}

export default BurgerButton;
