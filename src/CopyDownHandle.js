import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CopyDownHandle extends PureComponent {
  constructor(props) {
    super(props)
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  
  handleMouseDown (e) {
    e.persist()
    e.fromCopydownHandle = true
    this.props.onMouseDown.apply(this, [,,e]);
  }

  render() {
    const { selecting, onMouseDown } = this.props
    const className = [
      'copydown-handle',
      selecting && 'cursor-disabled',
    ]
    .filter(a => a)
    .join(' ')

    return (
      <div
        className={className}
        onMouseDown={this.handleMouseDown}
      ></div>
    )
  }
}

CopyDownHandle.propTypes = {
  selecting: PropTypes.bool,
  onMouseDown: PropTypes.func.isRequired
}
