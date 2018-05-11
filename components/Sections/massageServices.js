import React, { Component } from 'react';

class massageServices extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const windowWidth = window.innerWidth;
        const mobileSmWidth = 670;
        return (
            <table className='services-benefits-table'>
                <tbody>
                    {/*<!-- signature -->*/}
                    <tr className='service-row'>
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Float Spa 19 Signature Massage
                        </div>
                            <div className='services-benefits-list-wrapper clear'>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>30 Min</div>
                                        <div className='service-cost'>$50</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$78</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>90 Min</div>
                                        <div className='service-cost'>$118</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        <td className='services-benefits massage-img-1'>
                        </td>
                    </tr>
                    {/*<!-- oriental reflexology -->*/}
                    <tr className='service-row'>
                        {
                            windowWidth > mobileSmWidth ?
                                <td className='services-benefits massage-img-2'>
                                </td>
                                : null
                        }
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Oriental Reflexology
                        </div>
                            <div className='services-benefits-list-wrapper clear'>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>30 Min</div>
                                        <div className='service-cost'>$50</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$78</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>90 Min</div>
                                        <div className='service-cost'>$118</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        {
                            windowWidth <= mobileSmWidth ?
                                <td className='services-benefits massage-img-2'>
                                </td>
                                : null
                        }
                    </tr>
                    {/*<!-- hot stone -->*/}
                    <tr className='service-row'>
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Hot Stone Massage
                        </div>
                            <div className='services-benefits-list-wrapper clear'>

                                <div className='service-cost-item w1-2'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$78</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-2'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>90 Min</div>
                                        <div className='service-cost'>$118</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        <td className='services-benefits massage-img-3'>
                        </td>
                    </tr>
                    {/*<!-- Thai -->*/}
                    <tr className='service-row'>
                        {
                            windowWidth > mobileSmWidth ?
                                <td className='services-benefits massage-img-4'>
                                </td>
                                : null
                        }
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Thai Massage
                            </div>
                            <div className='services-benefits-list-wrapper clear'>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>30 Min</div>
                                        <div className='service-cost'>$50</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$78</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>90 Min</div>
                                        <div className='service-cost'>$118</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        {
                            windowWidth <= mobileSmWidth ?
                                <td className='services-benefits massage-img-4'>
                                </td>
                                : null
                        }
                    </tr>
                    {/*<!-- Prenatal -->*/}
                    <tr className='service-row'>
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Prenatal Massage
                        </div>
                            <div className='services-benefits-list-wrapper clear'>

                                <div className='service-cost-item w1-2'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$78</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-2'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>90 Min</div>
                                        <div className='service-cost'>$118</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        <td className='services-benefits massage-img-5'>
                        </td>
                    </tr>
                    {/*<!-- Swedish -->*/}
                    <tr className='service-row'>
                        {
                            windowWidth > mobileSmWidth ?
                                <td className='services-benefits massage-img-6'>
                                </td>
                                : null
                        }
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Swedish/Deep Tissue
                        </div>
                            <div className='services-benefits-list-wrapper clear'>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>30 Min</div>
                                        <div className='service-cost'>$50</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$78</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-3'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>90 Min</div>
                                        <div className='service-cost'>$118</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        {
                            windowWidth <= mobileSmWidth ?
                                <td className='services-benefits massage-img-6'>
                                </td>
                                : null
                        }

                    </tr>
                    {/*<!-- Couple massage -->*/}
                    <tr className='service-row'>
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Couple&#8217;s Massage
                        </div>
                            <div className='services-benefits-list-wrapper clear'>

                                <div className='service-cost-item w1-2'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$158</div>
                                    </div>
                                </div>
                                <div className='service-cost-item w1-2'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>90 Min</div>
                                        <div className='service-cost'>$238</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        <td className='services-benefits massage-img-7'>
                        </td>
                    </tr>
                    {/*<!-- Nirvana -->*/}
                    <tr className='service-row'>
                        {
                            windowWidth > mobileSmWidth ?
                                <td className='services-benefits massage-img-8'>
                                </td>
                                : null
                        }
                        <td className='services-benefits massage-service'>
                            <div className='services-benefits-header'>
                                Nirvana Massage
                        </div>
                            <div className='services-benefits-list-wrapper clear'>
                                <div className='service-cost-item'>
                                    <div className='service-cost-item-padder'>
                                        <div className='service-duration'>60 Min</div>
                                        <div className='service-cost'>$118</div>
                                    </div>
                                </div>
                                <div className='service-cost-book-wrapper'>
                                    <a className='btn btn-book' href='./book.html'>Book Now</a>
                                </div>
                            </div>
                        </td>
                        {
                            windowWidth <= mobileSmWidth ?
                                <td className='services-benefits massage-img-8'>
                                </td>
                                : null
                        }
                    </tr>
                    {/*<!-- add on -->*/}
                    <tr className='service-row'>
                        <td className='services-benefits addon'>
                            <div className='services-addon-text'>Add-ons include: Aromatherapy Oil ($10)</div>
                        </td>
                        <td className='services-benefits addon'>
                            <div className='services-addon-btn-wrapper'>
                                <a className='btn btn-book' href='./book.html'>Book Now</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default massageServices;