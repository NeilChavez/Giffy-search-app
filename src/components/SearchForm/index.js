import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RATINGS } from "../../settings/settings";

function SearchForm({ initialKeyword = "", initialRating = RATINGS[0] }) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [rating, setRating] = useState(initialRating);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}`);
  };
  const handleOnChange = (e) => {
    setRating(e.target.value);
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
    </form>
  );
}
const SearchFormMemo = memo(SearchForm);

export default SearchFormMemo;
