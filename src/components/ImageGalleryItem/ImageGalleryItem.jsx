const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li key={id} className="gallery-item" data-src={largeImageURL}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
