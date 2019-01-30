const initialState = {
    breed: "corgi",
    photo: "image"
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "CHANGE_BREED":
      return {...state, breed: action.payload}
    default:
      return state
  }
}

export default reducer
