import React, { Component, Fragment } from 'react'
import style from './style.less'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.escKeyPressHandler = this.escKeyPressHandler.bind(this)
  }
  escKeyPressHandler(event) {
    if(event.keyCode === 27) {
      this.props.handleClose()
    }
  }
  componentDidMount() {
    document.addEventListener("keydown",
      this.escKeyPressHandler,
      false
    )
  }
  componentWillUnmount() {
    document.removeEventListener("keydown",
      this.escKeyPressHandler,
      false
    )
  }
render() {
    const {
        show,
        children,
        handleClose
    } = this.props

    const showHideClass = show ? style.displayBlock : style.displayNone
  
    return (
      <div className={`${style.modal} ${ showHideClass }`}>>
        <section className={ style.modalMain }>
          { children }
          <span className={ style.btnClose } onClick={ handleClose }>close</span>
        </section>
      </div>
    )
  }
}

export default Modal