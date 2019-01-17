import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import { NUMBERS } from './../../utils/constants'
import style from './style.less'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            selectedValue: 1
        }
    }
    
    _renderCarousel() {      
        let slides = []
        for (let i = 1; i <= this.state.selectedValue; i++) {
            let color = "#" + ((1<<24) * Math.random()|0).toString(16)
            slides.push(
                <div key={ i }>
                    <div className={ style.slide } style={{background: color,}}>
                        <span>{ NUMBERS[i] }</span>
                    </div>
                </div>
            )
        }
        return slides
    }

    _renderOptions() {
        let options = []
        for (let i = 1; i <= 20; i++) {
            options.push(<option value={ i } key={ i }>{ i }</option>)
        }
        return options
    }

    _setSelected(e) {
        this.setState({
            selectedValue: e.target.value
        })
    }

    render() {
        const { user } = this.props
        
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return(
            <Fragment>
                <div className={ style.header }>
                    Welcome { user }!
                </div>

                <select 
                    value={ this.state.selectedValue } 
                    onChange={ (e) => this._setSelected(e) } 
                >
                    { this._renderOptions() }
                </select>
                <div className={ style.slickContainer }>
                    <Slider {...settings}>
                        {
                            this._renderCarousel()
                        }
                    </Slider>
                </div>
            </Fragment>
        )
    }
}

export default Profile