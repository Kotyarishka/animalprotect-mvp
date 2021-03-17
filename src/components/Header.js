import React, { useEffect, useRef, useState } from 'react';
import {
    useScrollSection,
  } from 'react-scroll-section';

import classNames from "classnames";

import css from './Header.module.css';

import Icon from '@mdi/react'
import {mdiMenu} from '@mdi/js'

const NavElement = (props) => {
    const item = useScrollSection(props.item)

    return (
        <li className={classNames(css.item, {[css.active]: item.selected})} onClick={() => {
            item.onClick()
            props.menu(false)
        }}>
            {props.title}
        </li>
    );
}

const Nav = () => {
    
    const [menu, setMenu] = useState(false)
    const menuRef = useRef()

    return (
        <nav className={classNames(css.menu, {[css.menuNavActive]: menu})} ref={menuRef}>
            <div className={css.menuBurger} onClick={() => setMenu(!menu)}>
                <Icon path={mdiMenu}
                    title='Меню'
                    size={'32px'}
                    color='#8c7ae6'
                />
            </div> 

            <ul className={classNames(css.list, {[css.menuActive]: menu})}>
                <NavElement title='Главная' item='intro' menu={setMenu}/>
                <NavElement title='О нас' item='about' menu={setMenu}/>
                <NavElement title='Значимость' item='why' menu={setMenu}/>
                <NavElement title='Контакты' item='contacts' menu={setMenu}/>
            </ul>
        </nav>
    );
}
export default Nav;
