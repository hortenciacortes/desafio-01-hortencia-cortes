export default function reducer(state = '', action) {
  switch (action.type) {
    case 'ADD_TOKEN': 
      return action.token;
    
    default:
      return state;
  }
}

export const addToken = (token) => {
  return {
    type: 'ADD_TOKEN',
    token
  }
}