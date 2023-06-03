export const getIngredients = () => {
    return fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((data) => {
        return data.data;
      })
      .catch((error) => console.error(error));
};