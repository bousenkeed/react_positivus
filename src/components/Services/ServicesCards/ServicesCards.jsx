import { servicesCards } from '../../../data/data';
import ServicesCard from '../ServicesCard/ServicesCard';
import styles from './ServicesCards.module.scss';

function ServicesList() {
    return (
        <ul className={styles.ServicesList}>
            {servicesCards.map((card, index) => {
                return (
                    <ServicesCard
                        key={index}
                        image={card.src}
                        title1={card.title1}
                        title2={card.title2}
                        variant={card.variant}
                    />
                );
            })}
        </ul>
    );
}

export default ServicesList;
