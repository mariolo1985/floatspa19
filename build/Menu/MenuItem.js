'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this.menuItemClick = function (section) {
            var sections = document.getElementsByClassName(String(section));
            sections.length > 0 ? window.scroll({
                top: sections[0].offsetTop + 60,
                behavior: "smooth"
            }) : null;
            // fix-me : Internet explorer fix
        };

        return _this;
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                name = _props.name,
                section = _props.section;

            return _react2.default.createElement(
                'li',
                { className: 'menu-item', onClick: function onClick() {
                        return _this2.menuItemClick(section);
                    } },
                _react2.default.createElement(
                    'div',
                    { className: 'menu-goto-section' },
                    name
                ),
                _react2.default.createElement('div', { className: 'menu-hover-id' })
            );
        }
    }]);

    return MenuItem;
}(_react.Component);

exports.default = MenuItem;