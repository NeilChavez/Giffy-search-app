import { memo, useState } from "react";

function SearchForm({ handleSubmit }) {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ keyword });
  };
  return (
    <form onSubmit={onSubmit}>
      {console.log("form se renderiza")}
      <input
        type="text"
        placeholder="Search a gif..."
        onChange={handleChange}
        value={keyword}
      />
    </form>
  );
}
const SearchFormMemo = memo(SearchForm);

export default SearchFormMemo;