import store from './index.js'

export const CHANGE_BREED = "CHANGE_BREED"
export const UPDATE_BREED_LIST = "UPDATE_BREED_LIST"
export const UPDATE_IMAGE = "UPDATE_IMAGE"

export const changeBreed = (breed) => ({
    type: CHANGE_BREED,
    payload: breed
})


export const updateBreedList = (breeds) => ({
  type: UPDATE_BREED_LIST,
  payload: breeds
})

export const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: image
})

export const loadBreeds = () => {
  return (dispatch) => {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(resp => dispatch(updateBreedList(Object.keys(resp.message))))
    .catch(console.error)
  }
}

export const fetchImage = () => {
  console.log(store.getState().selectedBreed)
  return (dispatch) => {
    return fetch(`https://dog.ceo/api/breed/${store.getState().selectedBreed}/images/random`)
    .then(resp => resp.json())
    .then(resp => dispatch(updateImage(resp.message)))
    .catch(console.error)
  }
}
