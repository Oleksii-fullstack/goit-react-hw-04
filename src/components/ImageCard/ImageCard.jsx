const ImageCard = ({ color, src, srcLarge, alt, openModal }) => {
  return (
    <div style={{ backgroundColor: color, borderColor: color }}>
      <img
        src={src}
        alt={alt}
        onClick={() => openModal({ src: srcLarge, alt })}
      />
    </div>
  );
};

export default ImageCard;
