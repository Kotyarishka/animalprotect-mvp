import React from 'react';

import css from './Sections/Section.module.css';
import css2 from './Footer.module.css';

import Icon from '@mdi/react'
import {mdiLinkVariant, mdiGithub} from '@mdi/js'
import classNames from 'classnames';

const Footer = () => {
    return (
        <div className={`${css.section} ${css2.footer} ${css.light}`}>
            <div className={classNames(css.content, css.center)}>
                <p style={{color: '#718093'}} className={css.no}>Разработано Котом, при поддержке проекта MULTIVERSE Project.</p>
                
            </div>

            <div className={classNames(css.content, css.center)}>
                <p className={css.no}>
                    Этот сайт с открытым исходным кодом.<br/>
                    <a href='https://github.com/Kotyarishka/animalprotect-mvp'>
                        <Icon path={mdiGithub}
                        title=''
                        size={'16px'}
                        color='#9c88ff'
                        /> Репозиторий на Github
                    </a>
                </p>
            </div>

            <div className={css.content}>
                <p className={css.no}>MULTIVERSE Project. &copy; 2021. Все права защещены. </p>
            </div>
        </div>
    );
}

export default Footer;
