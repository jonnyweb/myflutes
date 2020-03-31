import React, { Component } from 'react';

import PhotoBox from './PhotoBox';
import jsxToString from 'jsx-to-string';
import Lightbox from 'react-images';

const photos = [
  // {
  //   title: 'Peterborough Music Festival',
  //   name: 'King\'s Ely Junior School Flute Choir',
  //   src: 'images/portfolio/fullsize/peterborough.jpg',
  //   thumbnail: 'images/portfolio/thumbnails/peterborough.jpg'
  // },
  {
    title: 'KSE Young Musician of the Year 2020',
    name: 'Victoria Receiving the Walser Trophy',
    src: 'images/portfolio/fullsize/kseym_1.jpg',
    thumbnail: 'images/portfolio/thumbnails/kseym_1_thumb.jpg',
  },
  {
    title: 'Purcell Room',
    name: "King's Ely Junior School Flute Choir",
    src: 'images/portfolio/fullsize/purcell.jpg',
    thumbnail: 'images/portfolio/thumbnails/purcell.jpg',
  },
  {
    title: 'KSE Young Musician of the Year 2020',
    name: 'Lauren Playing in the Final',
    src: 'images/portfolio/fullsize/kseym_2.jpg',
    thumbnail: 'images/portfolio/thumbnails/kseym_2_thumb.jpg',
  },
  {
    title: 'Suzuki Lessons',
    name: 'Marianne & Eleanor',
    src: 'images/portfolio/fullsize/flutes_1.jpg',
    thumbnail: 'images/portfolio/thumbnails/flutes_1.jpg',
  },
  // {
  //   title: 'Suzuki Lessons',
  //   name: 'Marianne & Cosima',
  //   src: 'images/portfolio/fullsize/flutes_2.jpg',
  //   thumbnail: 'images/portfolio/thumbnails/flutes_2.jpg',
  // },
  // {
  //   title: 'ABRSM Results',
  //   name: 'Sarah (Grade 8 Distinction) & Victoria (Diploma Distinction)',
  //   src: 'images/portfolio/fullsize/flutes_7.jpg',
  //   thumbnail: 'images/portfolio/thumbnails/flutes_7.jpg',
  // },
  // {
  //   title: 'Lara & Victoria',
  //   name: 'Peterborough Music Festival 2019',
  //   src: 'images/portfolio/fullsize/peterborough_2019.jpg',
  //   thumbnail: 'images/portfolio/thumbnails/peterborough_2019.jpg',
  // },

  {
    title: "Ciara's Book 1 Recital",
    name: 'Performers Photo',
    src: 'images/portfolio/fullsize/flutes_3.jpg',
    thumbnail: 'images/portfolio/thumbnails/flutes_3.jpg',
  },
  {
    title: 'Suzuki Summer School 2017',
    name: 'Liz & Her Pupils',
    src: 'images/portfolio/fullsize/flutes_4.jpg',
    thumbnail: 'images/portfolio/thumbnails/flutes_4.jpg',
  },

  // {
  //   title: 'Oundle Music Festival 2019',
  //   name: 'Lauren (U15 Winner)',
  //   src: 'images/portfolio/fullsize/oundle_2019.jpg',
  //   thumbnail: 'images/portfolio/thumbnails/oundle_2019.jpg',
  // },
  // {
  //   title: 'Suzuki Twinkle Party',
  //   name: 'Harriet, Marianne, Cosima & Rachel',
  //   src: 'images/portfolio/fullsize/flutes_5.jpg',
  //   thumbnail: 'images/portfolio/thumbnails/flutes_5.jpg',
  // },
  // {
  //   title: 'Peterborough Music Festival',
  //   name: (<div>Top: Izzy, Lauren & Amy<br/>Bottom: Megan, Ciara & Hattie</div>),
  //   caption: 'Top: Izzy, Lauren & Amy, Bottom: Megan, Ciara & Hattie',
  //   src: 'images/portfolio/fullsize/flutes_6.jpg',
  //   thumbnail: 'images/portfolio/thumbnails/flutes_6.jpg',
  // },
];

export default class PhotoGallery extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
    };

    this.lightBoxImages = photos.map((c, i) => {
      c.caption = `${c.title} - ${c.caption || c.name}`;
      return c;
    });
  }

  openLightbox = (i, e) => {
    e.preventDefault();
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

  render() {
    const photoBoxes = photos.reduce((p, c, i) => {
      p.push(
        <PhotoBox
          index={i}
          key={`${c.title}${c.src}`}
          title={c.title}
          name={c.name}
          image={c.src}
          thumbnail={c.thumbnail}
          openLightbox={this.openLightbox}
        />
      );
      require(`../${c.thumbnail}`);
      require(`../${c.src}`);
      return p;
    }, []);

    return (
      <section className={'no-padding'} id="photos">
        <div className={'container-fluid'}>
          <div className={'row no-gutter popup-gallery'}>{photoBoxes}</div>
        </div>
        <Lightbox
          images={this.lightBoxImages}
          isOpen={this.state.lightboxIsOpen}
          currentImage={this.state.currentImage}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
        />
      </section>
    );
  }
}
