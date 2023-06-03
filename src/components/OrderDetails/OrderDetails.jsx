import React from "react";
import Modal from "../Modal/Modal";
import accept from './accept.jpg';
import style from "./OrderDetails.module.css"
import PropTypes from "prop-types";

function OrderDetails({onClose}) {
    return (
        <Modal onClose={onClose} isHeaderShow={false}>
            <div className={style.orderDetail}>
                <p className="text text_type_digits-large mb-8 mt-4">034536</p>
                <p className="text text_type_main-default mb-15">идентификатор заказа</p>
                <div className={style.image}>
                    <img className="mb-15" src={accept} alt="accept"/>
                </div>
                <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive mb-20">Дождитесь готовности на орбитальной станции</p>
            </div>
        </Modal>
    )
}

OrderDetails.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default OrderDetails;
