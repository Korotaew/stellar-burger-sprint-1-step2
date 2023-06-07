import Modal from "../Modal/Modal";
import styles from "./IngredientDetails.module.css"
import PropTypes from "prop-types";
import {ingredientTypes} from '../../utils/prop-types'

const IngredientDetails = ({ onClose, ingredient }) => {
    return (
        <Modal isHeaderShow={true} onClose={onClose}>
            <div className={styles.ingredientDetail}>
                <img src={ingredient.image_large} alt="large" className={`${styles.image} mb-4`} />
                <p className={`text text_type_main-medium mb-8 ${styles.name}`}>{ingredient.name}</p>
                <div className={`${styles.items} mb-5`}>
                <div className={styles.column}>
                    <p className="text text_color_inactive text_type_main-default mb-2">Калории</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
                </div>
                <div className={styles.column}>
                    <p className="text text_color_inactive text_type_main-default mb-2">Белки</p>
                    <p className="text text_color_inactive text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
                </div>
                <div className={styles.column}>
                    <p className="text text_color_inactive text_type_main-default mb-2">Жиры</p>
                    <p className="text_type_digits-default text_color_inactive">{ingredient.fat}</p>
                </div>
                <div className={styles.column}>
                    <p className="text text_color_inactive text_type_main-default mb-2">Углеводы</p>
                    <p className="text text_color_inactive text_color_inactive text_type_digits-default">{ingredient.carbohydrates}</p>
                </div>
                </div>
            </div>
        </Modal>
    );
  };

IngredientDetails.propTypes = {
    onClose: PropTypes.func.isRequired,
    ingredient: ingredientTypes.isRequired
};

export default IngredientDetails;

