import  {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModalOverLay = props => {
    return <div className={classes.modal}> 
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}
const documentElement = document.getElementById('overlay')
const  Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,documentElement)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,documentElement)}
    </Fragment>
}

export default Modal;