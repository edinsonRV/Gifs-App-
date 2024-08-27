import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputGif, setInputGif] = useState("");

  const onHandleChange = ({ target }) => {
    setInputGif(target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const trimmedInput = inputGif.trim();
    if (trimmedInput.length > 0) {
      onNewCategory(trimmedInput);
      setInputGif("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputGif}
        onChange={onHandleChange}
      />
    </form>
  );
};

