import { useState } from 'react';
import Title from '../UI/Title/Title';
import ProcessItem from './ProcessItem/ProcessItem';
import styles from './Process.module.scss';

function Process() {
    const [activeIndex, setActiveIndex] = useState(0);

    const processes = [
        {
            title: 'Consultation',
            description:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            title: 'Research and Strategy Development',
            description:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            title: 'Implementation',
            description:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            title: 'Monitoring and Optimization',
            description:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            title: 'Reporting and Communication',
            description:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            title: 'Continual Improvement',
            description:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
    ];

    const handleToggleItem = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className={styles.process}>
            <Title
                title="Our Working Process"
                text="Step-by-Step Guide to . Your Business Goals"
                className={styles.titleWidth}
            />
            <ul className={styles.process__list}>
                {processes.map((process, index) => {
                    return (
                        <ProcessItem
                            key={index}
                            index={index}
                            title={process.title}
                            description={process.description}
                            onToggleItem={() => handleToggleItem(index)}
                            isActive={activeIndex === index}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default Process;
