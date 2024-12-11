import Title from '../UI/Title/Title';
import { workers } from '../../data/data';
import Button from '../UI/Button/Button';
import styles from './Team.module.scss';

function Team() {
    return (
        <section className={styles.team}>
            <Title
                title="Team"
                text="Meet the skilled and experienced team behind our successful digital marketing strategies"
                className={styles.title}
            />
            <ul className={styles.team__cards}>
                {workers.map((worker, index) => {
                    return (
                        <li key={index} className={styles.worker}>
                            <div className={styles.worker__top}>
                                <div className={styles.worker__avatar}>
                                    <img src={worker.src} alt={`Worker ${worker.name}`} />
                                </div>
                                <div className={styles.worker__info}>
                                    <a className={styles.worker__link} href="/">
                                        <button>
                                            <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.317757 17H3.81308V5.68438H0.317757V17Z"
                                                    fill="#B9FF66"
                                                />
                                                <path
                                                    d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z"
                                                    fill="#B9FF66"
                                                />
                                                <path
                                                    d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z"
                                                    fill="#B9FF66"
                                                />
                                            </svg>
                                        </button>
                                    </a>
                                    <div className={styles.worker__deteils}>
                                        <h4>{worker.name}</h4>
                                        <span>{worker.function}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.worker__experience}>
                                <p>{worker.experience}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <Button className={styles.button}>See all team</Button>
        </section>
    );
}

export default Team;
