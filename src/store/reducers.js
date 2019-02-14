import * as actionTypes from '../store/action'

const initialState = {
    products: [],
    inventory: [10]
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.TEST:
            return {
                ...state,
                products: "Meow Meow Meow said the cat"
        }
        case actionTypes.TEST2:
            return {
                ...state,
                inventory: state.inventory - 1
        }
    }

    return state;
};

export default reducer;