import React, { PropTypes } from 'react';

export default function PhotoBox(props) {
  return (
    <div className={'col-lg-4 col-sm-6'}>
      <a href={props.image} className={'photo-box'} onClick={(e) => props.openLightbox(props.index, e)}>
        <img src={props.thumbnail} className={'img-responsive'} />
        <div className={'photo-box-caption'}>
          <div className={'photo-box-caption-content'}>
            <div className={'photo-category text-faded'}>
              {props.title}
            </div>
            <div className={'photo-name'}>
              {props.name}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

PhotoBox.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.node.isRequired,
  thumbnail: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  openLightbox: PropTypes.func.isRequired,
};
