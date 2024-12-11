import { useState } from 'react';

import styles from './RadioGroup.module.scss';

function RadioGroup({ radios, className }) {
    const [selectedOption, setSelectedOption] = useState(radios[0]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className={`${styles.radioGroup} ${className}`}>
            {radios.map((text, index) => {
                return (
                    <div key={index} className={styles.radioOption}>
                        <label>
                            <input
                                type="radio"
                                name="options"
                                value={text}
                                checked={selectedOption === text}
                                onChange={handleChange}
                                className={styles.radioInput}
                            />
                            <span className={styles.customRadio}></span>
                            {text}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}

export default RadioGroup;
