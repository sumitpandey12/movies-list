import React from "react";

const AddMovieForm = () => {
  return (
    <div className="flex flex-col items-start">
      <label className="font-bold mt-3">Title</label>
      <input
        className="w-full border rounded-xl"
        type="text"
        name="title"
        id="title"
      />

      <label className="font-bold mt-3">Opening Text</label>
      <input
        className="w-full border rounded-xl"
        type="text"
        name="opening_text"
        id="opening_text"
      />

      <label className="font-bold mt-3">Release Date</label>
      <input
        className="w-full border rounded-xl"
        type="text"
        name="release_date"
        id="release_date"
      />

      <button className="self-center bg-blue-600 text-white px-5 py-2 my-3 rounded-2xl">
        Add Movie
      </button>
    </div>
  );
};

export default AddMovieForm;
