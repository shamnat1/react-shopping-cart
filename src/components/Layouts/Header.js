import CartButton from '../Cart/CartButton';
import classes from './Header.module.css';

import { Icon } from '@iconify/react';
import messageIcon from '@iconify-icons/feather/message-square';
import calendarIcon from '@iconify-icons/feather/calendar';
import starIcon from '@iconify-icons/feather/star';
import checkSquare from '@iconify-icons/feather/check-square';
import mailIcon from '@iconify-icons/feather/mail';
import searchIcon from '@iconify-icons/feather/search';
import bellIcon from '@iconify-icons/feather/bell';
import alignJustify from '@iconify-icons/feather/align-justify';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <div>
          <Icon className={classes.icon_search} icon={alignJustify} />
          <Icon className={classes.icon} icon={calendarIcon} />
          <Icon className={classes.icon} icon={messageIcon} />
          <Icon className={classes.icon} icon={mailIcon} />
          <Icon className={classes.icon} icon={checkSquare} />
          <Icon className={classes.icon} color="#ff9f43" icon={starIcon} />
        </div>

        <div className={classes.navbar_second}>
          <Icon className={classes.icon_right} icon={searchIcon} />
          <CartButton iconClass={classes.icon_right} />
          <Icon className={classes.icon_right} icon={bellIcon} />
        </div>
        <div className={classes.user_tag}>
          <p>Username</p>
          <p>admin</p>
      </div>
      </nav>
      
    </header>
  );
};

export default Header;
