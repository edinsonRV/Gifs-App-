import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);
  return (
    <>
      {isLoading && <h2>cargando...</h2>}
      <h2>{category}</h2>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

