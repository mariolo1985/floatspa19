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

var floatingServices = function (_Component) {
    _inherits(floatingServices, _Component);

    function floatingServices(props) {
        _classCallCheck(this, floatingServices);

        return _possibleConstructorReturn(this, (floatingServices.__proto__ || Object.getPrototypeOf(floatingServices)).call(this, props));
    }

    _createClass(floatingServices, [{
        key: 'render',
        value: function render() {
            var windowWidth = window.innerWidth;
            var mobileSmWidth = 670;
            return _react2.default.createElement(
                'table',
                { className: 'services-benefits-table' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Floating Benefits'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'services-benefits-list content' },
                                    'Floating has a positive effect on the body and mind, remaining for days or even weeks after. Floating relaxes the brain allowing an increasing connection between the two brain hemispheres. This allows the brain to feel balanced spiritually, mentally, and physically. The float will also have a positive effect on memory, allowing one to recall information and activity.'
                                )
                            )
                        ),
                        _react2.default.createElement('td', { className: 'services-benefits float-benefit-img-1' })
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        windowWidth > mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits float-benefit-img-2' }) : null,
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Epsom Salt Benefits'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'services-benefits-list content' },
                                    'The Epsom Salts help to balance calcium levels in the body, reduce stress, balance hormones, normalize blood pressure, reduce risks of cancer and much more. The Magnesium salts ease stress, improve sleep and concentration. It allows the muscles and nerves to function properly. The sulfate salts can help the body flush toxins and improve absorption of nutrients. It also helps form joint proteins and brain tissue to help prevent or ease migraines.'
                                )
                            )
                        ),
                        windowWidth <= mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits float-benefit-img-2' }) : null
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Try Floating Today'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'services-benefits-list content clear' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'services-cost-wrapper' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'services-cost-text' },
                                            'Price'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'services-cost-text' },
                                            '$68 / 90 Minutes'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'services-cost-wrapper' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'services-cost-text' },
                                            'Includes'
                                        ),
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'serviecs-cost-list' },
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'services-cost-listitem' },
                                                'Includes preparation time and shower time'
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                { className: 'services-cost-listitem' },
                                                'A full hour will be spent in float pod'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits float-benefit-img-3' },
                            _react2.default.createElement('div', { className: 'title-fader' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'book-benefit-text' },
                                'Turn off outside inputs, relax and float.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'book-benefit-btn-wrapper' },
                                _react2.default.createElement(
                                    'a',
                                    { className: 'btn btn-book', href: './book.html' },
                                    'Book Now'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return floatingServices;
}(_react.Component);

exports.default = floatingServices;