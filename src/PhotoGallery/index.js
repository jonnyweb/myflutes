import React from 'react';
import Lightbox from 'react-image-lightbox';

import PhotoBox from './PhotoBox';

import './style.scss';

const photos = [
  {
    title: 'KSE Young Musician of the Year 2020',
    name: 'Victoria Receiving the Walser Trophy',
    src: require('../images/portfolio/fullsize/kseym_1.jpg'),
    thumbnail: require('../images/portfolio/thumbnails/kseym_1_thumb.jpg'),
  },
  {
    title: 'Purcell Room',
    name: "King's Ely Junior School Flute Choir",
    src: require('../images/portfolio/fullsize/purcell.jpg'),
    thumbnail: require('../images/portfolio/thumbnails/purcell.jpg'),
  },
  {
    title: 'KSE Young Musician of the Year 2020',
    name: 'Lauren Playing in the Final',
    src: require('../images/portfolio/fullsize/kseym_2.jpg'),
    thumbnail: require('../images/portfolio/thumbnails/kseym_2_thumb.jpg'),
  },
  {
    title: 'Suzuki Lessons',
    name: 'Marianne & Eleanor',
    src: require('../images/portfolio/fullsize/flutes_1.jpg'),
    thumbnail: require('../images/portfolio/thumbnails/flutes_1.jpg'),
  },
  {
    title: "Ciara's Book 1 Recital",
    name: 'Performers Photo',
    src: require('../images/portfolio/fullsize/flutes_3.jpg'),
    thumbnail: require('../images/portfolio/thumbnails/flutes_3.jpg'),
  },
  {
    title: 'Suzuki Summer School 2017',
    name: 'Liz & Her Pupils',
    src: require('../images/portfolio/fullsize/flutes_4.jpg'),
    thumbnail: require('../images/portfolio/thumbnails/flutes_4.jpg'),
  },
];

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
    };

    this.lightBoxImages = photos.map((c, i) => {
      c.caption = `${c.title} - ${c.caption || c.name}`;
      return c;
    });
  }

  openLightbox = (i, e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      currentImage: i,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    });
  };

  gotoNextLightboxImage = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };

  gotoPrevLightboxImage = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };

  renderPhotoBoxes() {
    return photos.reduce((previous, current, index) => {
      previous.push(
        <PhotoBox
          key={`${current.title}${current.src}`}
          title={current.title}
          name={current.name}
          image={current.src}
          thumbnail={current.thumbnail}
          openLightbox={this.openLightbox.bind(this, index)}
        />
      );

      return previous;
    }, []);
  }

  renderLightbox() {
    const { lightboxIsOpen, currentImage } = this.state;
    if (!lightboxIsOpen) return;

    const props = {
      mainSrc: photos[currentImage].src,
      imageCaption: (
        <>
          <b>{photos[currentImage].title}</b>: {photos[currentImage].name}
        </>
      ),
      onMovePrevRequest: this.gotoPrevLightboxImage,
      onMoveNextRequest: this.gotoNextLightboxImage,
      onCloseRequest: this.closeLightbox,
    };

    if (currentImage > 0) {
      props.prevSrc = photos[currentImage - 1].src;
    }

    if (currentImage < photos.length - 1) {
      props.nextSrc = photos[currentImage + 1].src;
    }

    console.log(props);
    return <Lightbox {...props} />;
  }

  render() {
    return (
      <section className={'no-padding'} id="photos">
        <div className={'container-fluid'}>
          <div className={'row no-gutter popup-gallery'}>{this.renderPhotoBoxes()}</div>
        </div>

        {this.renderLightbox()}
      </section>
    );
  }
}
