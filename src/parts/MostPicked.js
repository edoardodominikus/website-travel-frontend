import React from 'react'
import Button from 'elements/Button'
import { Fade } from 'react-reveal'
export default class MostPicked extends React.Component {
    render(){
        return (
    <section className='container' ref={this.props.refMostPicked}>
        <Fade>
            <h4 className='mb-3'>
                Most Picked
            </h4>
        <div className="container-grid">
                {   
                    this.props.data?.map((item,index)=>{
                        return (
                            <div key={`mostpicked-${index}`} className={`item column-4 ${index===0 ? " row-2" : " row-1"}`} >
                                <Fade bottom delay={500 * index}>
                                    <div className="card card-featured">
                                        <div className="tag">
                                            ${item.price}
                                            <span className="font-weight-light">per{item.unit}</span>
                                        </div>
                                        <figure className="img-wrapper">
                                            <img src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : ""} alt={item.title} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button type='link' className='stretched-link d-block text-white' href={`/properties/${item._id}`}>
                                                <h5>{item.name}</h5>
                                            </Button>
                                            <span>
                                                {item.city},{item.country}
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        )
                        
                    })
                }
            
        </div>
        </Fade>
    </section>
    )
    }
  
}
