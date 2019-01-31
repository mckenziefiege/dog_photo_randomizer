const initialState = {
    breeds: [],
    selectedBreed: "pembroke",
    image: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "CHANGE_SELECTED_BREED":
      return {...state, selectedBreed: action.payload}
    case "UPDATE_BREED_LIST":
      return {...state, breeds: action.payload}
    case "UPDATE_IMAGE":
      return {...state, image: action.payload}
    default:
      return state
  }
}

export default reducer
