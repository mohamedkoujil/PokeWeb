import React from "react";
import { useState } from "react";
import useForm from "../hooks/useForm";
import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = ({ onSearch }) => {
  const { formState, onImputChange, onResetForm } = useForm({ search: "" });

  const deobuncedSearch = useDebounce(formState.search, 500);

  useEffect(() => {
    deobuncedSearch && onSearch(deobuncedSearch);
  }, [deobuncedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formState.search);
    onResetForm();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <input
        className="form-control m-2 w-50"
        type="text"
        placeholder="Search Pokemon"
        name="search"
        value={formState.search}
        onChange={onImputChange}
      />
      <button type="submit" className="btn btn-primary m-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
