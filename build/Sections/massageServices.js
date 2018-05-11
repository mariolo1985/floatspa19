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

var massageServices = function (_Component) {
    _inherits(massageServices, _Component);

    function massageServices(props) {
        _classCallCheck(this, massageServices);

        return _possibleConstructorReturn(this, (massageServices.__proto__ || Object.getPrototypeOf(massageServices)).call(this, props));
    }

    _createClass(massageServices, [{
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
                        { className: 'service-row' },
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Float Spa 19 Signature Massage'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '30 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$50'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$78'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '90 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$118'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement('td', { className: 'services-benefits massage-img-1' })
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        windowWidth > mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-2' }) : null,
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Oriental Reflexology'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '30 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$50'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$78'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '90 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$118'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        windowWidth <= mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-2' }) : null
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Hot Stone Massage'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-2' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$78'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-2' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '90 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$118'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement('td', { className: 'services-benefits massage-img-3' })
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        windowWidth > mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-4' }) : null,
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Thai Massage'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '30 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$50'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$78'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '90 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$118'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        windowWidth <= mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-4' }) : null
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Prenatal Massage'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-2' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$78'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-2' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '90 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$118'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement('td', { className: 'services-benefits massage-img-5' })
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        windowWidth > mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-6' }) : null,
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Swedish/Deep Tissue'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '30 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$50'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$78'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '90 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$118'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        windowWidth <= mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-6' }) : null
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Couple\u2019s Massage'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-2' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$158'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item w1-2' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '90 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$238'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement('td', { className: 'services-benefits massage-img-7' })
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        windowWidth > mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-8' }) : null,
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits massage-service' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-header' },
                                'Nirvana Massage'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'services-benefits-list-wrapper clear' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-item' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'service-cost-item-padder' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-duration' },
                                            '60 Min'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'service-cost' },
                                            '$118'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'service-cost-book-wrapper' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'btn btn-book', href: './book.html' },
                                        'Book Now'
                                    )
                                )
                            )
                        ),
                        windowWidth <= mobileSmWidth ? _react2.default.createElement('td', { className: 'services-benefits massage-img-8' }) : null
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'service-row' },
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits addon' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-addon-text' },
                                'Add-ons include: Aromatherapy Oil ($10)'
                            )
                        ),
                        _react2.default.createElement(
                            'td',
                            { className: 'services-benefits addon' },
                            _react2.default.createElement(
                                'div',
                                { className: 'services-addon-btn-wrapper' },
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

    return massageServices;
}(_react.Component);

exports.default = massageServices;