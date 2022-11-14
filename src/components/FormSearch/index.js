import { useState } from "react";

export default function FormSearch({ handleSubmit }) {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(keyword);
      }}
    >
      <input
        type="text"
        placeholder="Search a photo..."
        value={keyword}
        onChange={handleChange}
      />
    </form>
  );
}
