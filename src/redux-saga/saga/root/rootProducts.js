import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS, } from "../../products/action/action";
import { handleGetProduct, handleUpdateProduct } from "../manageproduct/manageProduct";

// GET product data
export function* getProductSaga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handleGetProduct);
}
// POST product data

export function* updateProductSaga() {
    yield takeLatest(UPDATE_PRODUCT_PROGRESS, handleUpdateProduct);
}