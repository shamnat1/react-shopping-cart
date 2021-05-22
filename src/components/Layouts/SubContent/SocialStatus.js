
import classes from './SocialStatus.module.css';

const SocialStatus = () => {
    return (
        <>
            <h2>Title</h2>
            <div className={classes.row}>
                <div className={classes.item}>
                    <div className={`${classes.s_image} ${classes.lightColor}`}>img</div>
                    <div className={classes.s_text}>
                        <h4>999K</h4>
                        <p>Lorem</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={`${classes.s_image} ${classes.blueColor}`}>img</div>
                    <div className={classes.s_text}>
                        <h4>999K</h4>
                        <p>Lorem</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={`${classes.s_image} ${classes.redColor}`}>img</div>
                    <div className={classes.s_text}>
                        <h4>999K</h4>
                        <p>Lorem</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={`${classes.s_image} ${classes.greenColor}`}>img</div>
                    <div className={classes.s_text}>
                        <h4>999K</h4>
                        <p>Lorem</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default SocialStatus;