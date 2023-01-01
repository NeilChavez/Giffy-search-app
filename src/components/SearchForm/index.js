import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { RATINGS, LANGUAGES } from "../../settings/settings";
import { useForm } from "./hook"

import "./SearchForm.css"


function SearchForm({
  initialKeyword = "",
  initialRating = RATINGS[0],
  initialLanguage = LANGUAGES[0],
}) {
  const initialState = {
    keyword: initialKeyword,
    rating: initialRating,
    language: initialLanguage,
  };

  const {
    keyword,
    rating,
    language,
    updateKeyword,
    updateRating,
    updateLanguage,
  } = useForm({ initialState });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}/${language}`);
  };

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handleOnChange = (e) => {
    updateRating(e.target.value);
  };

  const handleLanguage = (e) => {
    updateLanguage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a gif..."
        onChange={handleChange}
        value={keyword}
      />
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
      <button type="submit" className="btn">Search</button>
    </form>
  );
}
const SearchFormMemo = memo(SearchForm);

export default SearchFormMemo;
