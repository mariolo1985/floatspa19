import React, { Component } from 'react';

class floatingServices extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const windowWidth = window.innerWidth;
        const mobileSmWidth = 670;
        return (
            <table className='services-benefits-table'>
                <tbody>
                    <tr>

                        <td className='services-benefits'>
                            <div className='services-benefits-header'>
                                Floating Benefits
                            </div>
                            <div className='services-benefits-list-wrapper'>
                                <div className='services-benefits-list content'>
                                    Floating has a positive effect on the body and mind, remaining for days or even weeks after. Floating relaxes the brain allowing
                                    an increasing connection between the two brain hemispheres. This allows the brain
                                    to feel balanced spiritually, mentally, and physically. The float will also have
                                    a positive effect on memory, allowing one to recall information and activity.

                                </div>
                            </div>
                        </td>
                        <td className='services-benefits float-benefit-img-1'>
                        </td>
                    </tr>
                    <tr>
                        {windowWidth > mobileSmWidth ?
                            <td className='services-benefits float-benefit-img-2'>
                            </td> : null
                        }
                        <td className='services-benefits'>
                            <div className='services-benefits-header'>
                                Epsom Salt Benefits
                            </div>
                            <div className='services-benefits-list-wrapper'>
                                <div className='services-benefits-list content'>
                                    The Epsom Salts help to balance calcium levels in the body, reduce stress, balance hormones, normalize blood pressure, reduce
                                    risks of cancer and much more. The Magnesium salts ease stress, improve sleep
                                    and concentration. It allows the muscles and nerves to function properly. The
                                    sulfate salts can help the body flush toxins and improve absorption
                                    of nutrients. It also helps form joint proteins and brain tissue to help prevent
                                    or ease migraines.

                                </div>
                            </div>
                        </td>
                        {windowWidth <= mobileSmWidth ?
                            <td className='services-benefits float-benefit-img-2'>
                            </td> : null
                        }
                    </tr>
                    <tr>
                        <td className='services-benefits'>
                            <div className='services-benefits-header'>
                                Try Floating Today
                            </div>
                            <div className='services-benefits-list-wrapper'>
                                <div className='services-benefits-list content clear'>
                                    <div className='services-cost-wrapper'>
                                        <div className='services-cost-text'>Price</div>
                                        <div className='services-cost-text'>
                                            $68 / 90 Minutes
                                        </div>
                                    </div>
                                    <div className='services-cost-wrapper'>
                                        <div className='services-cost-text'>Includes</div>
                                        <ul className='serviecs-cost-list'>
                                            <li className='services-cost-listitem'>Includes preparation time and shower time</li>
                                            <li className='services-cost-listitem'>A full hour will be spent in float pod</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className='services-benefits float-benefit-img-3'>
                            <div className='title-fader'></div>
                            <div className='book-benefit-text'>
                                Turn off outside inputs, relax and float.
                            </div>
                            <div className='book-benefit-btn-wrapper'>
                                <a className='btn btn-book' href='./book.html'>Book Now</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default floatingServices;