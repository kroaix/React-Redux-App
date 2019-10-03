import axios from 'axios';

export const GET_CARDS_START = 'GET_CARDS_START';
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FAIL = 'GET_CARDS_FAIL';

export const getCards = () => dispatch => {
  dispatch({ type: GET_CARDS_START });
  axios
    .get(`https://api.pokemontcg.io/v1/cards/`)
    .then(res => dispatch({ type: GET_CARDS_SUCCESS, payload: res.data.cards }))
    .catch(err => dispatch({ type: GET_CARDS_FAIL, payload: err }));
}