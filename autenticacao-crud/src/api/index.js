import axios from "axios"
import { addProducts } from "../store/products";
import { addProductsCount } from "../store/productsCount";

export const getToken = async (user, password) => {
  const token = await axios.post(`http://localhost:3000/login`, {
    user: user, 
    password: password 
  }).then(response => response.data.token)
  .catch(err => err.response.status)
  return token
}

export const getProducts = (page, value, token) => {
  return (dispatch) => {
    axios(`http://localhost:3000/products?_page=${page}&limit=10&_sort=${value},views&_order=cresc`, {
      headers: {
        "x-access-token": token, 
      }  
  }).then(response => {
      dispatch(addProducts(response.data));
      dispatch(addProductsCount(response.headers["x-total-count"]));
  }).catch(err => dispatch(addProducts([err.response.status, err.response.status])))
  }
}
