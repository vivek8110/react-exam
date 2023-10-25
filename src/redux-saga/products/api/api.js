import axios from "axios";
import { BASE_URL, GET_PRODUCT_API, UPDATE_PRODUCT_API } from "../../constant";

export function getProduct() {

    return axios.get(BASE_URL + GET_PRODUCT_API).then((res) => {
        // console.log("product", res);
        const data = res.data
        const status = res.status

        return {
            data, status
        }
    }).catch((err) => {
        console.log(err, 'err');
    })

}

export function updatehandler(udata) {
    const updatedata = axios.put(BASE_URL + UPDATE_PRODUCT_API, udata.payload).then((res) => {
        console.log(udata, "update");

        const data = res.data
        const status = res.status

        return {
            data, status
        }
    })

    return updatedata
}

