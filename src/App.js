import React, { Component } from 'react'
import { animateScroll, scrollSpy } from 'react-scroll'

import LazyLoad from 'react-lazyload'
import NavBar from './NavBar'

import Header from './Header'
import About from './About'
import Quote from './Quote'
import Lessons from './Lessons'
import PhotoGallery from './PhotoGallery'
import Videos from './Videos'
import Contact from './Contact'
import News from './News'

import './global.scss'

export default class App extends Component {
  componentDidMount() {
    scrollSpy.update()
  }

  scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  scrollToBottom = () => {
    animateScroll.scrollToBottom()
  }

  scrollTo = () => {
    animateScroll.scrollTo(100)
  }

  scrollMore = () => {
    animateScroll.scrollMore(100)
  }

  render() {
    return (
      <NavBar>
        <Header />
        <About name="About" href="about" />
        <News name="News" href="news" />
        <Quote
          content="Liz is a true professional who works very hard on each individual's needs. The musicianship shown by all her students at King's Ely is outstanding and the preparation and results she gains in exams are beyond our expectations."
          author="Neil Porter-Thaw - Director of Music, King's Ely Junior School"
        />
        <Lessons name="Lessons" href="lessons" />
        <Quote
          content="Liz has the ability to nurture the very best from Aoife. Aoife knows that Liz has the unwavering belief that she can achieve, with clear instruction; encouragement and an unending list of strategies to overcome challenges."
          author="Noala - Aoife's Mum"
        />
        <PhotoGallery name="Photos" href="photos" />
        <Quote
          content="I really enjoyed playing for all your wonderful flautists and I am so impressed with their patience, enthusiasm and stamina."
          author="Richard - accompanist"
        />
        <Videos name="Videos" href="videos" />
        <LazyLoad height={'100%'} offset={100}>
          <Contact name="Contact" href="contact" />
        </LazyLoad>
      </NavBar>
    )
  }
}
