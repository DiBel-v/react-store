import React, { Component } from 'react';
import ProductsContainer from '../../products-container';
import { fetchProductList } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../../../utils';
import { withClothingstoreService } from '../../hoc';

import './clothes.sass';

class Clothes extends Component {

    componentDidMount() {
        this.props.fetchProductList();
    }

    render() {
        const { products } = this.props;
        return (
            <div className="clothes">
                <div className="clothes__headline">All our clothes are unisex, check the linear mesh</div>
                <div className="clothes__sign">Clothes</div>
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
        fetchProductList: fetchProductList({ clothingstoreService, productType: 'clothes' })
    }, dispatch)
}

export default compose(
    withClothingstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Clothes);
