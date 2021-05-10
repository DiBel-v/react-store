import updateStylesDependency from './styles-dependency';
import updateProductList from './product-list';
import updateCart from './cart';

const reducer = (state, action) => {
    return {
        stylesDependency: updateStylesDependency(state, action),
        productList: updateProductList(state, action),
        cart: updateCart(state, action)
    }
}

export default reducer;