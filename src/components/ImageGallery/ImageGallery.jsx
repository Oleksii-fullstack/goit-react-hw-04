import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ galleryList }) => {
  return (
    <ul>
      {galleryList.map(({ id, alt_description, urls: { small } }) => {
        return (
          <li key={id}>
            <ImageCard src={small} alt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
