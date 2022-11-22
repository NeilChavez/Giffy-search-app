import {useReducer} from "react";

export function useForm({ initialState }) {
    const TYPES = {
      UPDATE_KEYWORD: "update-keyword",
      UPDATE_RATING: "update-rating",
      UPDATE_LANGUAGE: "update-language",
    };
  
    const reducer = (state, action) => {
      switch (action.type) {
        case TYPES.UPDATE_KEYWORD: {
          return {
            ...state,
            keyword: action.payload,
          };
        }
        case TYPES.UPDATE_RATING:
          return {
            ...state,
            rating: action.payload,
          };
        case TYPES.UPDATE_LANGUAGE:
          return {
            ...state,
            language: action.payload,
          };
        default:
          return state;
      }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const { keyword, rating, language } = state;
  
    const updateKeyword = (keyword) => {
      dispatch({ type: TYPES.UPDATE_KEYWORD, payload: keyword });
    };
    const updateRating = (rating) => {
      dispatch({ type: TYPES.UPDATE_RATING, payload: rating });
    };
    const updateLanguage = (language) => {
      dispatch({ type: TYPES.UPDATE_LANGUAGE, payload: language });
    };
  
    return {
      keyword,
      rating,
      language,
      updateKeyword,
      updateRating,
      updateLanguage,
    };
  }
  