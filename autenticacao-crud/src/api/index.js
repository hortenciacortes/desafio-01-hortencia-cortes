import axios from "axios"
import { addProducts } from "../store/products";
import { addProductsCount } from "../store/productsCount";

export const getProducts = (page) => {
  return (dispatch) => {
    axios(`http://localhost:3000/products?_page=${page}&limit=10`).then(response => {
      dispatch(addProducts(response.data));
      dispatch(addProductsCount(response.headers["x-total-count"]));
  });
  }
}