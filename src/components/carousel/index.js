import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Slider from "react-slick"
import { NUMBERS } from './../../utils/constants'
import Modal from './../modal'
import * as ActionCreator from './CarouselActionCreators'
import style from './style.less'

class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            selectedValue: 1,
            showModal: false
        }
    }
    
    // _renderCarousel = () => {      
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
        const selectedValue = e.target.value
        this.setState({
            selectedValue: selectedValue
        })

        this.props.dispatch(ActionCreator.update({
            selectedValue
        }))
    }

    _showModal() {
        this.setState({ showModal: true });
    };

    _hideModal() {
        this.setState({ showModal: false });
    };

    render() {
        const { user } = this.props
        console.log(this.props.selection)
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

                {
                    Object.keys( this.props.selection).length > 0 &&
                        <Fragment>
                            <span className={ style.submitButton } onClick={() => this._showModal()}>FINISH</span>
                            
                            <Modal show={ this.state.showModal } handleClose={() => this._hideModal()}>
                                    <div className={style.modalHeader}>Your selection</div>
                                {
                                    this.props.selection.map((value, key) => 
                                        <div className={ style.count } key={ key }>{ value }</div>
                                    )
                                }
                            </Modal>
                        </Fragment>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        selection: state.carouselReducer.selection,
    }
}

export default connect( mapStateToProps )( Carousel )