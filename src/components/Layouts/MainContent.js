import {useSelector} from 'react-redux';
import classes from './MainContent.module.css';
import Cart from '../Cart/Cart'
import Description from './SubContent/Description'
import CenteredText from './SubContent/CenteredText'
import SocialStatus from './SubContent/SocialStatus'
const MainContent = () => {
    const showCart = useSelector(state => state.ui.cartIsVisible)
    return(
        <div className={classes.content}>
            {showCart && <Cart/>}
            <div className={classes.one}><Description/></div>
            <div className={classes.two}><SocialStatus/></div>
            <div className={classes.three}></div>
            <div className={classes.four}></div>
            <div className={classes.five}></div>
            <div className={classes.six}><CenteredText/></div>
            <div className={classes.seven}></div>
            <div className={classes.eight}></div>
        </div>

    //     {<div className={classes.content}>
    //      <div className={classes.content_one}>Title</div>
    //      <div className={classes.content_two}>Title</div>
    //      <div className={classes.second_line_content}>Second</div>
    //      <div className={classes.second_line_content}>Second</div>
    //      <div className={classes.second_line_content}>Third</div>
    //      <div className={classes.second_line_content}>Third</div>
    // </div>}
)
}

export default MainContent;