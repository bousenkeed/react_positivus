import styles from './ProcessItem.module.scss';

function ProcessItem({ isActive = false, index, title, description, onToggleItem }) {
    return (
        <li className={`${styles.processItem} ${isActive ? styles.active : ''}`}>
            <div
                className={styles.processItem__top}
            >
                <span className={styles.processItem__number}>{'0' + (index + 1)}</span>
                <h3>{title}</h3>
                <button
                    className={styles.processItem__toggleButton}
                    onClick={onToggleItem}
                >
                    <img
                        className={`${isActive ? styles.minus : styles.plus}`}
                        src={`images/icons/${isActive ? 'minus' : 'plus'}.svg`}
                        alt="toggle process icon"
                    />
                </button>
            </div>

            <p
                className={`${styles.processItem__description} ${
                    isActive ? styles.active : ''
                }`}
            >
                {description}
            </p>
        </li>
    );
}

export default ProcessItem;
