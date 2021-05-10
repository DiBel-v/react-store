const updateStylesDependency = (state, action) => {
    if (state === undefined) {
        return {
            isNavigationListDropped: false
        }
    }

    switch(action.type) {
        case 'FETCH_IS_NAVIGATION_LIST_DROPPED':
            return {
                isNavigationListDropped: action.payload
            }
        default:
            return state.stylesDependency
    }
}

export default updateStylesDependency;
