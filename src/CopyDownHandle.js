import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CopyDownHandle extends PureComponent {
  render() {
    const { selecting, copydownHandlers } = this.props
    const { onDragStart, onDrag, onDragEnd } = copydownHandlers
    const className = [
      'copydown-handle',
      selecting && 'cursor-disabled',
    ]
    .filter(a => a)
    .join(' ')

    return (
      <div
        className={className}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      ></div>
    )
  }
}

CopyDownHandle.propTypes = {
  selecting: PropTypes.bool,
  copydownHandlers: PropTypes.shape({
    onDragStart: PropTypes.func.isRequired,
    onDrag: PropTypes.func.isRequired,
    onDragEnd: PropTypes.func.isRequired,
  }).isRequired
}
