import React, { useState, useEffect } from "react";
import Appheader from './components/AppHeader/Appheader';
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { getIngredients } from "./utils/api";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <>
        <Appheader />
        {error ? (
          <div>{error}</div>
        ) : (
          <>
            <BurgerIngredients ingredients={ingredients} />
            <BurgerConstructor />
          </>
        )}
      </>
    </div>
  );
}

export default App;