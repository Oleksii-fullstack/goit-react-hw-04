import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return toast.error("You must enter your search phrase");
    }
    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={value}
        />
        <button type="submit">
          Search
          <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
