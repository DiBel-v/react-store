import React, { Component } from 'react';
import SvgComponent from '../global/svg-component';
import { propductAddedToCart, productRemovedFromCart } from  '../../actions';
import { connect } from 'react-redux';

import './product.sass';

class Product extends Component {

    render() {
        const { item, onAddToCart, onDeleteFromCart, cartList, productType } = this.props;
        const itemInCart = cartList.find(cartItem => cartItem.id === item.id);
        const cartActionBlock = (count) => {
            return (
                <div className="product__cart-block">
                    <button className="product__cart-button product__cart-button_remove" onClick={() => onDeleteFromCart(item.id)}>&#8211;</button>
                    <span className="product__cart-item-amount">{count}</span>
                    <button className="product__cart-button product__cart-button_add" onClick={() => onAddToCart(item.id)}>+</button>
                </div>
            );
        };
        return (
            <div className="product">
                <div className="product__image-container">
                    <img className="product__image" src={item.image} />
                </div>
                <div className="product__description">
                    <div className="product__info">
                        <span className="product__title">{item.title}</span>
                        <span className="product__price">${item.price}</span>
                    </div>
                    <div className="product__action-cart">
                        {   
                            itemInCart ? cartActionBlock(itemInCart.count)
                                : <button className="product__add-to-cart" onClick={() => onAddToCart(item.id)}>
                                    <SvgComponent className="product__cart-icon" name="cart-product" />
                                </button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ cart: { cartList }, productList: {productType}}) => {
    return {
        cartList,
        productType
    }
}

const mapDispatchToProps = {
    onAddToCart: propductAddedToCart,
    onDeleteFromCart: productRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
