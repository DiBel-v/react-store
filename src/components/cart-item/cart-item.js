import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allProductsRemovedFromCart, propductAddedToCart, productRemovedFromCart } from '../../actions';

import './cart-item.sass';

class CartItem extends Component {
    render() {
        const { item, onDeleteCartItem, onDeleteFromCart, onAddToCart } = this.props;
        return(
            <div className="cart-item">
                <img className="cart-item__img" src={item.img}/>
                <div className="cart-item__info">
                    <span className="cart-item__title">{item.title}</span>
                    <span className="cart-item__price">Total price: ${item.total}</span>
                    <span className="cart-item__amount">Amount of items: {item.count}</span>
                </div>
                <div className="cart-item__change-amount">
                    <button className="cart-item__cart-button cart-item__cart-button_remove" onClick={() => onDeleteFromCart(item.id)}>&#8211;</button>
                        <span className="cart-item__cart-item-amount">{item.count}</span>
                    <button className="cart-item__cart-button cart-item__cart-button_add" onClick={() => onAddToCart(item.id)}>+</button>
                </div>
                <button className="cart-item__delete" onClick={() => onDeleteCartItem(item.id)}>X</button>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    onDeleteCartItem: allProductsRemovedFromCart,
    onDeleteFromCart: productRemovedFromCart,
    onAddToCart: propductAddedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
