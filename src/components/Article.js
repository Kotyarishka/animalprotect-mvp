import React, { Component } from 'react';

import {mdiConnection} from '@mdi/js';
import Icon from '@mdi/react';

import css from './Article.module.css';
 
class Article extends Component {
    constructor(props){
        super(props)

        this.ip = props.ip
    }

    render() {
        return (
            <div className={css.art}>
                <div>
                    <p>
                        Собака подарит вам своё сердце и душу, если вы ответите ей тем же!
                    </p>
                    <p>
                        Животные нуждаются в вашей помощи, не оставайтесь в стороне! В ответ вы получите нескончаемую любовь!
                    </p>
                </div>
            </div>
        );
    }
}

export default Article;
