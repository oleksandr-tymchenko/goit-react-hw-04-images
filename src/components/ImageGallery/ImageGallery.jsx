import PropTypes from 'prop-types';
import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';

export const ImageGalery = ({ images, openModal }) => {
  return (
    <ImgGallery>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <ImageGaleryItem
            key={id}
            imgUrl={webformatURL}
            imgLargeUrl={largeImageURL}
            ImgName={tags}
            openModal={openModal}
          />
        );
      })}
    </ImgGallery>
  );
};

ImageGalery.propTypes = {
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  imgLargeUrl: PropTypes.string,
  ImgName: PropTypes.array,
  openModal: PropTypes.func,
};
