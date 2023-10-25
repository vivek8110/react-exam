/* eslint-disable default-case */
import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PROGRESS, UPDATE_PRODUCT_SUCCESS } from "../action/action"

const initialState = {
    product: [],

    getProductProgress: false,
    getProductError: null,
    dataIsLoaded: false,


    updateProductProgress: false,
    updateProductError: null,
    updateProductDuplicate: null,

}
const productReducer = (state = initialState, action) => {
    console.log(action, "reducer");
    switch (action.type) {
        case GET_PRODUCT_PROGRESS: {
            return ({
                ...state,
                getProductProgress: true,
                getProductError: null,
                dataIsLoaded: false
            })
        }
        case GET_PRODUCT_SUCCESS: {
            return ({
                ...state,
                getProductProgress: false,
                getProductError: null,
                product: action.data,
                dataIsLoaded: true
            })
        }
        case GET_PRODUCT_ERROR: {
            return ({
                ...state,
                getProductProgress: false,
                getProductError: action.data,
                dataIsLoaded: false
            })
        }


        // update
        case UPDATE_PRODUCT_PROGRESS: {
            return ({
                ...state,
                updateProductProgress: true,
                updateProductError: null,
                dataIsLoaded: false
            })
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return ({
                ...state,
                updateProductProgress: false,
                updateProductError: null,
                product: state.product.find(action.data),
                dataIsLoaded: true
            })
        }
        case UPDATE_PRODUCT_ERROR: {
            return ({
                ...state,
                updateProductProgress: false,
                updateProductError: action.data,
                dataIsLoaded: false
            })
        }



        default: return state
    }
}

export default productReducer;