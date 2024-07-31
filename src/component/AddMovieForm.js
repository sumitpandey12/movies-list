import React, { useState } from "react";

const AddMovieForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    opening_text: "",
    release_date: "",
  });

  function onTitleChangeHandler(e) {
    e.preventDefault();
    setFormState({
      ...formState,
      title: e.target.value,
    });
  }
  function onOpeningTextChangeHandler(e) {
    e.preventDefault();
    setFormState({
      ...formState,
      opening_text: e.target.value,
    });
  }
  function onReleaseDateChangeHandler(e) {
    e.preventDefault();
    setFormState({
      ...formState,
      release_date: e.target.value,
    });
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    props.onAddMovie(formState);
  }

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col items-start">
      <label className="font-bold mt-3">Title</label>
      <input
        className="w-full border rounded-xl"
        type="text"
        name="title"
        id="title"
        onChange={onTitleChangeHandler}
      />

      <label className="font-bold mt-3">Opening Text</label>
      <input
        className="w-full border rounded-xl"
        type="text"
        name="opening_text"
        id="opening_text"
        onChange={onOpeningTextChangeHandler}
      />

      <label className="font-bold mt-3">Release Date</label>
      <input
        className="w-full border rounded-xl"
        type="text"
        name="release_date"
        id="release_date"
        onChange={onReleaseDateChangeHandler}
      />

      <button
        type="submit"
        className="self-center bg-blue-600 text-white px-5 py-2 my-3 rounded-2xl"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
