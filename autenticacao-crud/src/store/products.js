import axios from 'axios';

export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return [...action.products];

    case 'ADD_PRODUCT':
      axios.post('http://localhost:3000/products', action.product).then(response => response.status);
      return state;

    case 'EDIT_PRODUCT':
       axios.put(`http://localhost:3000/products/${action.product.id}`, action.product).then(response => response.status);
      return state;

    case 'DELETE_PRODUCT':
      axios.delete(`http://localhost:3000/products/${action.id}`).then(response => response.status);
      return state.filter(item => item.id !== action.id);

    default:
      return state;
    }
}

export const addProducts = (products) => {
  return {
    type: 'ADD_PRODUCTS',
    products
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export const editProduct = (product) => {
  return {
    type: 'EDIT_PRODUCT',
    product
  }
}

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id
  }
}