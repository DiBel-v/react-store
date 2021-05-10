import React, { Component } from 'react';
import ProductsContainer from '../../products-container';
import { fetchProductList } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../../../utils';
import { withClothingstoreService } from '../../hoc';

import './accessories.sass';

class Accessories extends Component {

    componentDidMount() {
        this.props.fetchProductList();
    }

    render() {
        const { products } = this.props;
        return (
            <div className="accessories">
                <div className="accessories__headline">Things that will complement your image</div>
                <div className="accessories__sign">Accessories</div>
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
        fetchProductList: fetchProductList({ clothingstoreService, productType: 'accessories' })
    }, dispatch)
}

export default compose(
    withClothingstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Accessories);
