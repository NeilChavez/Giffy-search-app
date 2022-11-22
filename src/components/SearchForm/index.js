import { memo, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { RATINGS } from "../../settings/settings";

const TYPES = {
  UPDATE_KEYWORD: "update-keyword",
  UPDATE_RATING: "update-rating",
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
    default:
      return state;
  }
};

function SearchForm({ initialKeyword = "", initialRating = RATINGS[0] }) {
  // const [keyword, setKeyword] = useState(initialKeyword);
  // const [rating, setRating] = useState(initialRating);
  const initialState = {
    keyword: initialKeyword,
    rating: initialRating,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { keyword, rating } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({ type: TYPES.UPDATE_KEYWORD, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}`);
  };

  const handleOnChange = (e) => {
    dispatch({ type: TYPES.UPDATE_RATING, payload: e.target.value });
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
    </form>
  );
}
const SearchFormMemo = memo(SearchForm);

export default SearchFormMemo;
