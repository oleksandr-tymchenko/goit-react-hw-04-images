import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGaleryItem = ({
  imgUrl,
  ImgName,
  imgLargeUrl,
  openModal,
}) => {
  return (
    <ImgGalleryItem>
      <ImgGalleryItemImage
        src={imgUrl}
        alt={ImgName}
        onClick={() => {
          openModal(imgLargeUrl);
        }}
      />
    </ImgGalleryItem>
  );
};

ImageGaleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  ImgName: PropTypes.string.isRequired,
  imgLargeUrl: PropTypes.string.isRequired,
};
