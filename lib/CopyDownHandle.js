'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyDownHandle = function (_PureComponent) {
  _inherits(CopyDownHandle, _PureComponent);

  function CopyDownHandle() {
    _classCallCheck(this, CopyDownHandle);

    return _possibleConstructorReturn(this, (CopyDownHandle.__proto__ || Object.getPrototypeOf(CopyDownHandle)).apply(this, arguments));
  }

  _createClass(CopyDownHandle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selecting = _props.selecting,
          copydownHandlers = _props.copydownHandlers;
      var onDragStart = copydownHandlers.onDragStart,
          onDrag = copydownHandlers.onDrag,
          onDragEnd = copydownHandlers.onDragEnd;

      var className = ['copydown-handle', selecting && 'cursor-disabled'].filter(function (a) {
        return a;
      }).join(' ');

      return _react2.default.createElement('div', {
        className: className,
        onDragStart: onDragStart,
        onDrag: onDrag,
        onDragEnd: onDragEnd
      });
    }
  }]);

  return CopyDownHandle;
}(_react.PureComponent);

exports.default = CopyDownHandle;


CopyDownHandle.propTypes = {
  selecting: _propTypes2.default.bool,
  copydownHandlers: _propTypes2.default.shape({
    onDragStart: _propTypes2.default.func.isRequired,
    onDrag: _propTypes2.default.func.isRequired,
    onDragEnd: _propTypes2.default.func.isRequired
  }).isRequired
};