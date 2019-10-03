import { 
  GET_CARDS_START,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAIL
} from "../actions";

const initialState = {
  cards: [],
  gettingCards: false,
  error: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS_START:
      return {
        ...state,
        gettingCards: true
      };
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        gettingCards: false,
        cards: action.payload
      };
    case GET_CARDS_FAIL:
      return {
        ...state,
        gettingCards: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;