import Button from '../../UI/Button/Button';
import styles from './ServicesBanner.module.scss';

function ServicesBanner() {
    return (
        <div className={styles.ServicesBanner}>
            <div className={styles.ServicesBanner__body}>
                <h3>Let’s make things happen</h3>
                <p>
                    Contact us today to learn more about how our digital marketing
                    services can help your business grow and succeed online.
                </p>
                <Button>Get your free proposal</Button>
            </div>
            <div className={styles.ServicesBanner__image}>
                <img src="images/services.svg" alt="" />
            </div>
        </div>
    );
}

export default ServicesBanner;
