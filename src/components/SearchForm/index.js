import { useState } from "react";

export default function SearchForm({ handleSubmit }) {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({keyword});
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search a gif..."
        onChange={handleChange}
        value={keyword}
      />
    </form>
  );
}
