import React, { Component } from 'react'
import Star from 'elements/Star'
import Button from 'elements/Button'
import TestimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg'
import { Fade } from 'react-reveal'

export default class Testimony extends Component {
  render() {
    return (
      <Fade bottom>
          <section className='container'>
          <div className="row align-items-center">
            <div className="col" style={{marginRight: 60}}>
              <div className="testimonial-hero" style={{margin: `30px 0 0 30px`}}>
                <img src={this.props.data.imageUrl} alt="Testimonial" className='position-absolute' style={{zIndex:2}}/>
                <img src={TestimonyAccent} alt="Testimonial frame" className='position-absolute' style={{margin:`-30px 0 0 -30px`, zIndex:1}}/>
              </div>
            </div>
            <div className="col-6">
              <h4 style={{marginBottom: 40}}>
                {this.props.data.name}
              </h4>
              <Star value={this.props.data.rate} width={35} height={35} spacing={4}></Star>
              <h5 className="h2 font-weight-light line-height-2 my-3">
                {this.props.data.content}
              </h5>
              <span className="text-gray-500">
                {this.props.data.familyName}, {this.props.data.familyOccupation}
              </span>
              <div>
                <Button className='btn px-5' style={{marginTop: 40}} hasShadow isPrimary type="link" href={`/testimonial/${this.props.data._id}`}>
                  Read Their Story
                </Button>
              </div>
            </div>
          </div>
        </section> 
      </Fade>
      
    )
  }
}
