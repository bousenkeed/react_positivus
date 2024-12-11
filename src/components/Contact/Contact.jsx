import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Contact.module.scss';
import RadioGroup from '../UI/RadioGroup/RadioGroup';

function Contact() {
    return (
        <section className={styles.contact}>
            <Title
                title="Contact Us"
                text={`Connect with Us: Let's Discuss Your Digital Marketing Needs`}
                className={styles.title}
            />
            <form className={styles.form}>
                <div className={styles.form__container}>
                    <RadioGroup
                        radios={['Say Hi', 'Get a Quote']}
                        className={styles.radio}
                    />
                    <div className={styles.form__inputs}>
                        <div className={styles.form__inputContainer}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className={styles.form__input}
                            />
                        </div>
                        <div className={styles.form__inputContainer}>
                            <label htmlFor="email">Email*</label>
                            <input
                                className={styles.form__input}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className={styles.form__inputContainer}>
                            <label htmlFor="textArea">Message*</label>
                            <textarea
                                className={styles.form__input}
                                name="textArea"
                                id="textArea"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                    </div>
                <Button type='submit'>Send Message</Button>
                </div>

            </form>
        </section>
    );
}

export default Contact;
