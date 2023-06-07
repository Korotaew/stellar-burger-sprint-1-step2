import React, { useState, useEffect } from "react";
import Appheader from './components/AppHeader/Appheader';
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { fetchIngredients, getBunIngredients, getSauceIngredients, getMainIngredients } from "./utils/ingredients";
import styles from './App.module.css'
function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchIngredients();
        setIngredients([...getBunIngredients(), ...getSauceIngredients(), ...getMainIngredients()]);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIngredients([]);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <Appheader />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className={styles.content}>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor />
          </div>
        )}
      </>
    </div>
  );
}

export default App;