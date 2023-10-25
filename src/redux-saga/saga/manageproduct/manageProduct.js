import { call, put } from "redux-saga/effects";
import { getProduct, updatehandler, } from "../../products/api/api";
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS, } from "../../products/action/action";

export function* handleGetProduct(action) {
    try {
        const res = yield call(getProduct, action);
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}

export function* handleUpdateProduct(action) {
    try {
        const res = yield call(updatehandler, action);
        const status = res.status;
        const data = res.data;

        console.log(res, "handlerupdatemanage");
        if (status === 200) {
            yield put({ type: UPDATE_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: UPDATE_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}

