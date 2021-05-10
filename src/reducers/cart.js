const updateCartList = (cartItems, item, idx) => {
    
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (thing, item = {}, qunatity) => {
    const {id = thing.id, img = thing.image, count = 0, title = thing.title, total = 0 } = item;
    return {
        id,
        img,
        title,
        count: count + qunatity,
        price: thing.price,
        total: total + qunatity*thing.price
    }
}

const updateOrder = (state, productId, qunatity, itemToModify) => {
    const { productList: { products }, cart: { cartList } } = state;
    const thing = itemToModify || products.find((item) => item.id === productId);
    const itemIndex = cartList.findIndex(({ id }) => id === productId);
    const item = cartList[itemIndex];
    const newItem = updateCartItem(thing, item, qunatity);

    const updatedCartList = updateCartList(cartList, newItem, itemIndex);
    const totalCount = updatedCartList.length ? updatedCartList.reduce((acc, listItem) => acc += listItem.count, 0) : 0;
    const orderTotal = updatedCartList.length ? updatedCartList.reduce((acc, listItem) => acc += listItem.total, 0) : 0;

    return {
        orderTotal,
        cartList: updateCartList(cartList, newItem, itemIndex),
        totalCount
    }
}

const updateCart = (state, action) => {
    if (state === undefined) {
        return {
            cartList: [],
            orderTotal: 0,
            totalCount: 0
        }
    }
    const item = state.cart.cartList.find(({id}) => id === action.payload);
    switch(action.type) {
        case 'PRODUCT_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1, item);
        case 'PRODUCT_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1, item);
        case 'ALL_PRODUCT_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -item.count, item);
        case 'CLEAR_CART':
            return {
                cartList: [],
                orderTotal: 0,
                totalCount: 0
            }
        default:
            return state.cart;
    }
}

export default updateCart;
