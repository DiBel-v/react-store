import React, { Component } from 'react';
import CartItem from '../../cart-item';
import { connect } from 'react-redux';
import './product-cart.sass';
import PurchaseModal from '../../purchase-modal/purchase-modal';
import { clearCart } from '../../../actions';

class ProductCart extends Component {

    state = {
        isPurchased: false
    }

    purchaseItems() {
        this.setState({isPurchased: true});
        this.props.onClearCart();
        setTimeout(() => this.setState({isPurchased: false}), 2000);
    }

    render() {
        const { cartList, orderTotal } = this.props;
        if (this.state.isPurchased) return <PurchaseModal />
        if (!cartList.length) return <div className="product-cart__empty">Unfortunately you have no items in cart</div>
        return (
            <div className="product-cart">
                <div className="product-cart__head">Cart</div>
                <div className="product-cart__list">
                    {
                        cartList.map(el => {
                            if (el) return <CartItem key={el.id} item={el} />;
                        })
                    }
                </div>
                <div className="product-cart__purchase">
                    <span className="product-cart__total-order">Total price: ${orderTotal}</span>
                    <button className="product-cart__buy" onClick={() => this.purchaseItems()}>Purchase</button>
                </div>
            </div>
        ) 
    }
};

const mapStateToProps = ({ cart: { cartList, orderTotal }}) => {
    return { cartList, orderTotal };
}

const mapDispatchToProps = {
    onClearCart: clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);