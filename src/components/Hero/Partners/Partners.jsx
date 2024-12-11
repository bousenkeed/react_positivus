import styles from './Partners.module.scss';

function Partners() {
    const partners = [
        'images/partners/1.svg',
        'images/partners/2.svg',
        'images/partners/3.svg',
        'images/partners/4.svg',
        'images/partners/5.svg',
        'images/partners/6.svg',
    ];
    return <ul className={styles.partners}>{partners.map((src, index) => {
        return <li key={index} className={styles.partners__item}>
            <img src={src} alt="Partner" />
        </li>
    })}</ul>;
}

export default Partners;
