import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CopyDownHandle extends PureComponent {
  render() {
    const { selecting } = this.props
    const className = [
      'copydown-handle',
      selecting && 'cursor-disabled',
    ]
    .filter(a => a)
    .join(' ')

    return (
      <div className={className}></div>
    )
  }
}

CopyDownHandle.propTypes = {
  selecting: PropTypes.bool
}
