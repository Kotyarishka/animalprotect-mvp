import React from 'react';
import css from './Section.module.css';

const Hightlight = (props) => {
    return (
        <span className={css.hightlight}>{props.children}</span>
    );
}

export default Hightlight;
