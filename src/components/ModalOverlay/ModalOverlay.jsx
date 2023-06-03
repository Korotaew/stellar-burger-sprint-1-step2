import React from "react";
import style from "./ModalOverlay.module.css"
import PropTypes from "prop-types";

function ModalOverlay({onClose}) {
    return (
        <div className={style.modalOverlay} onClick={onClose} />
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default ModalOverlay;
