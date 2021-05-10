const updateProductList = (state, action) => {
    if (state === undefined) {
        return {
            products: [],
            isLoading: false,
            error: null
        }
    }

    switch(action.type) {
        case 'FETCH_ITEMS_REQUEST':
            return {
                products: [],
                productType: '',
                isLoading: true,
                error: null
            }
        case 'FETCH_ITEMS_SUCCESS': 
            return {
                products: action.payload.items,
                productType: action.payload.productType,
                isLoading: false,
                error: null,
            }
        case 'FETCH_ITEMS_FAILURE':
            return {
                products: [],
                productType: '',
                isLoading: false,
                error: action.payload
            }
        default:
            return state.productList

    }

};

export default updateProductList;
