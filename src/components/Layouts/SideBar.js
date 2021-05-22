import React from 'react';
import classes from './SideBar.module.css';

import { Icon } from '@iconify/react';
import homeIcon from '@iconify-icons/feather/home';
import checkSquare from '@iconify-icons/feather/check-square';
import mailIcon from '@iconify-icons/feather/mail';
import messageIcon from '@iconify-icons/feather/message-square';
import calendarIcon from '@iconify-icons/feather/calendar';
import shoppingCart from '@iconify-icons/feather/shopping-cart';
import typeIcon from '@iconify-icons/feather/type';
import eyeIcon from '@iconify-icons/feather/eye';
import creditCard from '@iconify-icons/feather/credit-card';




const SideBar = () => {
    return <div className={classes.container}>

        <ul className={`${classes.menu} ${classes.menu_home}`}>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={homeIcon} />
                <label>Home</label>
                <span className={classes['child-number-tag']}>2</span>
                <span className={`${classes['child-arrow-down']}`}>{'⌄'}</span>
            </li>
        </ul>

        <ul className={classes.menu}>
            <label className={classes.menu_title}>CATEGORY 1</label>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={mailIcon} />
                <label>Email</label>
            </li>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={messageIcon} />
                <label>Chat</label>
            </li>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={checkSquare} />
                <label>Todo</label>
            </li>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={calendarIcon} />
                <label>Calendar</label>
            </li>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={shoppingCart} />
                <label>Ecommerce</label> <span className={classes['child-arrow-left']}>{'>'}</span>
            </li>
            
        </ul>

        <ul className={classes.menu}>
            <label className={classes.menu_title}>CATEGORY 2</label>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={typeIcon} />
                <label>Typography</label>
            </li>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={eyeIcon} />
                <label>Feather</label>
            </li>
            <li className={classes.item}>
                <Icon className={classes.icon} icon={creditCard} />
                <label>Cards</label>
                <span className={classes['child-new-tag']}>new</span>
                <span className={classes['child-arrow-left']}>{'>'}</span>
            </li>
        </ul>
    </div>
}

export default SideBar;