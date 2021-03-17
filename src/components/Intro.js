import React from 'react';
import { Section } from 'react-scroll-section';

import css from './Intro.module.css';
import ParticlesBg from 'particles-bg'

const Intro = () => {
    return (
        <Section id='intro'>
            <ParticlesBg type="cobweb" bg={true} color={['#9c88ff']}/>
            <div className={css.container}>
                <img src='/dog.png'/>
                <h2>Помощь бездомным животным</h2>
                <h4>Волонтерский проект</h4>
            </div>
        </Section>
    );
}

export default Intro;
