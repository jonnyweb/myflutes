import React from 'react'
import Lightbox from 'react-image-lightbox'

import PhotoBox from './PhotoBox'

import kseym_1 from '../images/portfolio/fullsize/kseym_1.jpg'
import kseym_2 from '../images/portfolio/fullsize/kseym_2.jpg'
import purcell from '../images/portfolio/fullsize/purcell.jpg'
import flutes_1 from '../images/portfolio/fullsize/flutes_1.jpg'
import flutes_3 from '../images/portfolio/fullsize/flutes_3.jpg'
import flutes_4 from '../images/portfolio/fullsize/flutes_4.jpg'

import kseym_1_thumb from '../images/portfolio/thumbnails/kseym_1.jpg'
import kseym_2_thumb from '../images/portfolio/thumbnails/kseym_2.jpg'
import purcell_thumb from '../images/portfolio/thumbnails/purcell.jpg'
import flutes_1_thumb from '../images/portfolio/thumbnails/flutes_1.jpg'
import flutes_3_thumb from '../images/portfolio/thumbnails/flutes_3.jpg'
import flutes_4_thumb from '../images/portfolio/thumbnails/flutes_4.jpg'

import './style.scss'

const photos = [
  {
    title: 'KSE Young Musician of the Year 2020',
    name: 'Victoria Receiving the Walser Trophy',
    src: kseym_1,
    thumbnail: kseym_1_thumb,
  },
  {
    title: 'Purcell Room',
    name: "King's Ely Junior School Flute Choir",
    src: purcell,
    thumbnail: purcell_thumb,
  },
  {
    title: 'KSE Young Musician of the Year 2020',
    name: 'Lauren Playing in the Final',
    src: kseym_2,
    thumbnail: kseym_2_thumb,
  },
  {
    title: 'Suzuki Lessons',
    name: 'Marianne & Eleanor',
    src: flutes_1,
    thumbnail: flutes_1_thumb,
  },
  {
    title: "Ciara's Book 1 Recital",
    name: 'Performers Photo',
    src: flutes_3,
    thumbnail: flutes_3_thumb,
  },
  {
    title: 'Suzuki Summer School 2017',
    name: 'Liz & Her Pupils',
    src: flutes_4,
    thumbnail: flutes_4_thumb,
  },
]

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
    }

    this.lightBoxImages = photos.map((c, i) => {
      c.caption = `${c.title} - ${c.caption || c.name}`
      return c
    })
  }

  openLightbox = (i, e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      currentImage: i,
      lightboxIsOpen: true,
    })
  }

  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    })
  }

  gotoNextLightboxImage = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  gotoPrevLightboxImage = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

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
      )

      return previous
    }, [])
  }

  renderLightbox() {
    const { lightboxIsOpen, currentImage } = this.state
    if (!lightboxIsOpen) return

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
    }

    if (currentImage > 0) {
      props.prevSrc = photos[currentImage - 1].src
    }

    if (currentImage < photos.length - 1) {
      props.nextSrc = photos[currentImage + 1].src
    }

    return <Lightbox {...props} />
  }

  render() {
    return (
      <section className={'no-padding'} id="photos">
        <div className={'container-fluid'}>
          <div className={'row no-gutter popup-gallery'}>{this.renderPhotoBoxes()}</div>
        </div>

        {this.renderLightbox()}
      </section>
    )
  }
}
