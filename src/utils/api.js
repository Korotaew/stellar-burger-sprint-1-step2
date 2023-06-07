export const getIngredients = () => {
  return fetch("https://norma.nomoreparties.space/api/ingredients")
    .then((res) => checkReponse(res))
    .then((data) => {
      return data.data;
    })
    .catch((error) => console.error(error));
};

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};