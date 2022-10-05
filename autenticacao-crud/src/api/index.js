import axios from "axios"
import { addProducts } from "../store/products";
import { addProductsCount } from "../store/productsCount";

export const getProducts = (page, value) => {
  return (dispatch) => {
    axios(`http://localhost:3000/products?_page=${page}&limit=10&_sort=${value},views&_order=cresc`).then(response => {
      dispatch(addProducts(response.data));
      dispatch(addProductsCount(response.headers["x-total-count"]));
  });
  }
}
