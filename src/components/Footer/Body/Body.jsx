import styles from './Body.module.scss';

function Body() {
    return (
        <div className={styles.footer__body}>
            <div className={styles.footer__body__contacts}>
                <h2>Contact us:</h2>
                <address>
                    <span>Email: info@positivus.com</span>
                    <span>Phone: 555-567-8901</span>
                    <span>
                        Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
                    </span>
                </address>
            </div>
            <form className={styles.footer__body__subscribe}>
                <input
                    className={styles.footer__body__subscribe__input}
                    type="email"
                    placeholder="Email"
                    required
                />
                <button
                    className={styles.footer__body__subscribe__button}
                    type="submit"
                >
                    Subscribe to news
                </button>
            </form>
        </div>
    );
}

export default Body;
