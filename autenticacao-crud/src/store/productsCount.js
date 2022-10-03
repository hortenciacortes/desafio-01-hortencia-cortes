export default function reducer(state = 1, action) {
  switch (action.type) {
    case 'ADD_PRODUCTS_COUNT':
      return Math.ceil(action.productsCount / 10);

    default:
      return state;
    }
}

export const addProductsCount = (productsCount) => {
  return {
    type: 'ADD_PRODUCTS_COUNT',
    productsCount
  }
}