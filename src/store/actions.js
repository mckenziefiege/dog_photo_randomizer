export const CHANGE_BREED = "CHANGE_BREED"
export const UPDATE_BREED_LIST = "UPDATE_BREED_LIST"

// action creators
export const changeBreed = (breed) => ({
  type: CHANGE_BREED,
  payload: breed
})

export const updateBreedList = (breeds) => ({
  type: UPDATE_BREED_LIST,
  payload: breeds
})

export const loadBreeds = () => {
  return (dispatch) => {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(resp => dispatch(updateBreedList(Object.keys(resp.message))))
    .catch(console.error)
  }
}
