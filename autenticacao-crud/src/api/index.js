import axios from "axios"
import { addProducts } from "../store/products";

export const getProducts = () => {
  return (dispatch) => {
    axios('http://localhost:3000/products').then(response => dispatch(addProducts(response.data)));
  }
}