const navigationOpened = (isNavigationOpened) => {
    return {
        type: 'FETCH_IS_NAVIGATION_LIST_DROPPED',
        payload: isNavigationOpened
    };
};

const fetchProductRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUEST'
    };
};

const productsLaoded = ({ items, productType }) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: { items, productType }
    };
};

const productsError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    };
};

const propductAddedToCart = (productId) => {
    return {
        type: 'PRODUCT_ADDED_TO_CART',
        payload: productId
    };
};

const productRemovedFromCart = (productId) => {
    return {
        type: 'PRODUCT_REMOVED_FROM_CART',
        payload: productId
    };
};

const allProductsRemovedFromCart = (productId) => {
    return {
        type: 'ALL_PRODUCT_REMOVED_FROM_CART',
        payload: productId
    };
};

const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}

const fetchProductList = ({clothingstoreService, productType}) => () => (dispatch) => {
    dispatch(fetchProductRequested());
    clothingstoreService.getProducts(productType)
        .then((data) => dispatch(productsLaoded({ items: data, productType })))
        .catch(error => dispatch(productsError(error)))
}

export {
    navigationOpened,
    fetchProductList,
    propductAddedToCart,
    productRemovedFromCart,
    allProductsRemovedFromCart,
    clearCart
};
