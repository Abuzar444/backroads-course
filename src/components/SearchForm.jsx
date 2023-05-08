import React, { useRef } from "react";
import { useGlobalContext } from "../context.jsx";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="search search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            onChange={() => {
              setSearchTerm(searchValue.current.value);
            }}
            id="name"
            type="text"
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
