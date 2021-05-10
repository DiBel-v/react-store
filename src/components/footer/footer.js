import React, { Component } from 'react';
import SvgComponent from '../global/svg-component';
import './footer.sass';

class Footer extends Component {
    render() {
        const socialNetworks = [
            {
                name: 'vk',
                link: 'https://vk.com'
            },
            {
                name: 'twitter',
                link: 'https://twitter.com'
            },
            {
                name: 'inst',
                link: 'https://instagram.com'
            },
            {
                name: 'fb',
                link: 'https://facebook.com'
            },
        ]

        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__content">
                        <ul className="footer__list">
                            <li className="footer__list-item footer__list-item_is_bold">SUBSCRIBE TO THE NEWSLETTER</li>
                            <li className="footer__list-item footer__list-item_is_bold">SUPPORT</li>
                            <li className="footer__list-item footer__list-item_is_bold">ABOUT SNACK</li>
                            <li className="footer__list-item footer__list-item_is_bold">NEWS</li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__list-item footer__list-item_is_bold">OTHER INFORMATION</li>
                            <li className="footer__list-item">Delivery</li>
                            <li className="footer__list-item">Refund</li>
                            <li className="footer__list-item">Order status</li>
                        </ul>
                        <div className="footer__social-networks">
                            {
                                socialNetworks.map((social) => {
                                    return <SvgComponent key={social.name} className="footer__social-network-icon" name={`${social.name}`} />
                                })
                            }
                        </div>
                    </div>
                    <div className="footer__sub-footer">
                        <div className="footer__rights">
                            &#169; Snack, Inc., {new Date().getFullYear()}. All rights reserved.
                        </div>
                        <nav>
                            <ul className="footer__sub-footer-list">
                                <li className="footer__sub-footer-list-item">Catalog</li>
                                <li className="footer__sub-footer-list-item">Terms of use</li>
                                <li className="footer__sub-footer-list-item">About company</li>
                                <li className="footer__sub-footer-list-item">Store addresses</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        );
    }   
}

export default Footer;
