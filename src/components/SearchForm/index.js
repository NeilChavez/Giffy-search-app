import { memo, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { RATINGS, LANGUAGES } from "../../settings/settings";

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

function SearchForm({
  initialKeyword = "",
  initialRating = RATINGS[0],
  initialLanguage = "",
}) {

  const initialState = {
    keyword: initialKeyword,
    rating: initialRating,
    language: initialLanguage,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { keyword, rating, language } = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}/${language}`);
  };

  const handleChange = (e) => {
    dispatch({ type: TYPES.UPDATE_KEYWORD, payload: e.target.value });
  };

  const handleOnChange = (e) => {
    dispatch({ type: TYPES.UPDATE_RATING, payload: e.target.value });
  };

  const handleLanguage = (e) => {
    dispatch({ type: TYPES.UPDATE_LANGUAGE, payload: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a gif..."
        onChange={handleChange}
        value={keyword}
      />
      {console.log(state)}
      <select onChange={handleOnChange} value={rating}>
        <option disabled>Select a rating</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <select onChange={handleLanguage} value={language}>
        <option disabled>Select a language</option>
        {LANGUAGES.map((language) => (
          <option key={language}>{language}</option>
        ))}
      </select>
    </form>
  );
}
const SearchFormMemo = memo(SearchForm);

export default SearchFormMemo;
