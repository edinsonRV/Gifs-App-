import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GiffExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiffExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiffExpertApp;

//api key
//74p8gVrao1uUGYYh01d3Wez8WXi4T7tm
