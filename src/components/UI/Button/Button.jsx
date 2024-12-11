import styles from './Button.module.scss';

function Button({ type, className = '', variant = 'primary', children, style = {} }) {
    // variant = 'primary', 'secondary'
    const buttonClass = `${styles.button} ${className} ${styles[variant]}`;

    return (
        <button className={buttonClass} type={type} style={style}>
            {children}
        </button>
    );
}

export default Button;
