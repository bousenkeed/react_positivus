import StudiesCard from './StudiesCard/StudiesCard';
import Title from '../UI/Title/Title';
import styles from './Studies.module.scss';

function Studies() {
    const cards = [
        'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
        'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
        'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    ];

    return (
        <section className={styles.studies}>
            <Title
                title="Case Studies"
                text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
            />
            <ul className={styles.studies__cards}>
                {cards.map((cardText, index) => {
                    return <StudiesCard key={index} text={cardText} />;
                })}
            </ul>
        </section>
    );
}

export default Studies;
