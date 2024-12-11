import Title from '../UI/Title/Title';
import ServicesCards from './ServicesCards/ServicesCards';
import ServicesBanner from './ServicesBanner/ServicesBanner';
import styles from './Services.module.scss';

function Services() {
    return (
        <section className={styles.services}>
            <Title
                title="Services"
                text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            />
            <ServicesCards />
            <ServicesBanner />
        </section>
    );
}

export default Services;
