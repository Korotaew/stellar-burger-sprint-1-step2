import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/prop-types'
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Ingredients.module.css';
import { getIngredients } from "../../utils/api";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const BurgerIngredients = ({ data, openModal }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  function openIngredient(ingredient) {
    setSelectedIngredient(ingredient);
  }

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getIngredients();
      setIngredients(result);
    };
    fetchData();
  }, []);

  const bunIngredients = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const sauceIngredients = ingredients.filter((ingredient) => ingredient.type === 'sauce');
  const mainIngredients = ingredients.filter((ingredient) => ingredient.type === 'main');

    return (
      <div className={styles.content}>
        <h1 className={`${styles.title} text_type_main-large`}>Соберите бургер</h1>
        <div style={{display: 'flex'}} className={styles.tabs}>
          <Tab value="one">Булки</Tab>
          <Tab value="two">Соусы</Tab>
          <Tab value="three">Начинки</Tab>
        </div>
        <ul className={styles.list}>
          <li className={styles.category}>
            <h2 className="text text_type_main-medium">Булки</h2>
            {bunIngredients.map((ingredient) => (
              <div onClick={() => openIngredient(ingredient)} className={styles.item} key={ingredient._id}>
                <img src={ingredient.image} alt={ingredient.name} />
                <div className={`${styles.price} mb-2`}>
                    <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={styles.itemText}>{ingredient.name}</p>
              </div>
            ))}
            {selectedIngredient && (
              <IngredientDetails onClose={() => setSelectedIngredient(null)} ingredient={selectedIngredient} />
            )}
          </li>
          <li className={styles.category}>
            <h2 className="text text_type_main-medium">Соусы</h2>
            {sauceIngredients.map((ingredient) => (
              <div onClick={() => openIngredient(ingredient)} className={styles.item} key={ingredient._id}>
                <img src={ingredient.image} alt={ingredient.name} />
                <div className={`${styles.price} mb-2`}>
                    <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={styles.itemText}>{ingredient.name}</p>
              </div>
            ))}
            {selectedIngredient && (
              <IngredientDetails onClose={() => setSelectedIngredient(null)} ingredient={selectedIngredient} />
            )}
          </li>
          <li className={styles.category}>
            <h2 className="text text_type_main-medium">Начинки</h2>
            {mainIngredients.map((ingredient) => (
              <div onClick={() => openIngredient(ingredient)} className={styles.item} key={ingredient._id}>
                <img src={ingredient.image} alt={ingredient.name} />
                <div className={`${styles.price} mb-2`}>
                    <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={styles.itemText}>{ingredient.name}</p>
              </div>
            ))}
            {selectedIngredient && (
              <IngredientDetails onClose={() => setSelectedIngredient(null)} ingredient={selectedIngredient} />
            )}
          </li>
        </ul>
      </div>
    );
  };

  BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientTypes)
};

export default BurgerIngredients;