import useEmblaCarousel from 'embla-carousel-react';

import React from 'react';
import { PrevButton, NextButton, usePrevNextButtons } from './SliderArrowButtons';
import { DotButton, useDotButton } from './SliderDotButtons';
import { slides } from '../../data/data';
import styles from './Slider.module.scss';

const Slider = (props) => {
    const { options } = props;

    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);

    return (
        <section className={styles.slider}>
            <div className={styles.slider__viewport} ref={emblaRef}>
                <div className={styles.slider__container}>
                    {slides.map((slide, index) => (
                        <div className={styles.slider__slide} key={index}>
                            <div className={styles.slider__slide__number}>
                                {slide.review}
                            </div>
                            <div className={styles.slider__info}>
                                <h4>{slide.name}</h4>
                                <span>{slide.function}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.slider__controls}>
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    buttonClass={styles.slider__button}
                />
                <div className={styles.slider__dots}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={styles.slider__dot.concat(
                                index === selectedIndex
                                    ? ` ${styles.slider__dot_selected}`
                                    : ''
                            )}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                    fill="white"
                                />
                            </svg>
                        </DotButton>
                    ))}
                </div>
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    buttonClass={styles.slider__button}
                />
            </div>
        </section>
    );
};

export default Slider;
