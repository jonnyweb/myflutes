import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

export default function PhotoBox(props) {
  return (
    <div className={'col-lg-4 col-sm-6'}>
      <a href={props.src} className={'photo-box'} onClick={props.openLightbox}>
        <LazyLoad height={'100%'} offset={100}>
          <img src={props.thumbnail} className={'img-responsive'} alt={props.title + ' ' + props.name} />
        </LazyLoad>
        <div className={'photo-box-caption'}>
          <div className={'photo-box-caption-content'}>
            <div className={'photo-category text-faded'}>{props.title}</div>
            <div className={'photo-name'}>{props.name}</div>
          </div>
        </div>
      </a>
    </div>
  )
}

PhotoBox.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.node.isRequired,
  thumbnail: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  openLightbox: PropTypes.func.isRequired,
}
