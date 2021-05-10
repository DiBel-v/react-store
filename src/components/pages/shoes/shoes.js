import React, { Component } from 'react';
import ProductsContainer from '../../products-container';
import { fetchProductList } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../../../utils';
import { withClothingstoreService } from '../../hoc';

import './shoes.sass';

class Shoes extends Component {

    componentDidMount() {
        this.props.fetchProductList();
    }

    render() {
        const { products } = this.props;
        return (
            <div className="shoes">
                <div className="shoes__headline">You always find what you need</div>
                <div className="shoes__sign">Shoes</div>
                <ProductsContainer items={products} />
            </div>
        );
    }
}

const mapStateToProps = ({ productList: { products } }) => {
    return { products };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { clothingstoreService } = ownProps;
    return bindActionCreators({
        fetchProductList: fetchProductList({ clothingstoreService, productType: 'shoes' })
    }, dispatch)
}

export default compose(
    withClothingstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Shoes);
