import React, { Component } from 'react';
import './products-container.sass';
import { connect } from 'react-redux';
import Product from '../product';
import Loader from '../loader';

class ProductsContainer extends Component {
    render() {
        const { isLoading, items } = this.props;
        if (isLoading) return <Loader />;
        return (
            <div className="products-container">
                {
                    items.map((el) => {
                        return <Product key={el.id} item={el}></Product>;
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = ({ productList: { isLoading } }) => {
    return { isLoading };
}

export default connect(mapStateToProps)(ProductsContainer);
