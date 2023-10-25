import { all } from "@redux-saga/core/effects";
import { getProductSaga, updateProductSaga } from "./root/rootProducts";

export function* rootSaga() {
  yield all([getProductSaga(), updateProductSaga()]);
}