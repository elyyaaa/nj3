import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, handleShow}) => {
    return (
        <>
           <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>close</button>
                {children}
            </div>
        </>
    );
};

export default Modal;