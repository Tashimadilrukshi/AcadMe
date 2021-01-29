import React, { Component } from "react";
//import logo from '../../assets/images/academe.png';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./HomeCarousel.css"

import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import withCaption from 'react-awesome-slider/dist/captioned';
import CaptionedStyles from 'react-awesome-slider/dist/captioned.css';

class HomeCarousel extends Component {
    render() {
      const AutoplaySlider = withAutoplay(AwesomeSlider);
      const CaptionedSlider = withCaption(AutoplaySlider);
      return (
      <CaptionedSlider
          animation="openAnimation" 
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2500}
          //startupScreen={StartupScreen}
          cssModule={CaptionedStyles}
          screens={[
            {
              backgroundColor: '#4a9c8c',
              media: "https://www.ibisworld.com/resources/img/personas/th-persona-academics-featured-main.jpg",
              caption: 'Are You Tired of Calculating Your GPA.....?',
            },
            {
              backgroundColor: '#4a9c8c',
              media: "https://www.albert.io/blog/wp-content/uploads/2016/05/man-wearing-black-and-white-stripe-shirt-looking-at-white-thinking-212286-1024x683.jpg",
              caption: "Worrying about no time to check your academic performance.....?",
            },
            {
              backgroundColor: '#4a9c8c',
              media: 'https://blog.aifsabroad.com/wp-content/uploads/2020/05/AdobeStock_254424115-scaled.jpeg',
              caption: "The answer is -- Don't think about it....",
            },
            {
              backgroundColor: '#4a9c8c',
              media: "https://miro.medium.com/max/2732/1*nYtnC6vMhMqPXOdJahTEpg.png",
              caption: "We can keep tracking your academic performance....",
            },
            {
              backgroundColor: '#4a9c8c',
              media: "https://4.bp.blogspot.com/-ReIrtyMNBVY/VFuZo4aziGI/AAAAAAAAEwk/vrSJ-6SfoSQ/s1600/Writing.jpg",
              caption: "Everything will be up to date with your academics.....",
            },
          ]}
      />
      );
    }
  }

export default HomeCarousel;

  //   <AutoplaySlider 
  //   animation="openAnimation" 
  //   play={true}
  //   cancelOnInteraction={false} // should stop playing on user interaction
  //   interval={3000}
  // >
  // <div data-src="https://www.ibisworld.com/resources/img/personas/th-persona-academics-featured-main.jpg"/> 
  // <div data-src="https://www.albert.io/blog/wp-content/uploads/2016/05/man-wearing-black-and-white-stripe-shirt-looking-at-white-thinking-212286-1024x683.jpg"/>
  // <div data-src="https://storage-prtl-co.imgix.net/endor/articles/406/images/1537198554_shutterstock_431109490.jpg?max-w=660&max-h=532&fit=crop&auto=format,compress&q=40"/>
  // <div data-src='https://miro.medium.com/max/2732/1*nYtnC6vMhMqPXOdJahTEpg.png'/>
  // </AutoplaySlider>