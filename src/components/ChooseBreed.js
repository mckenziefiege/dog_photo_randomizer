import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadBreeds} from '../redux/actions'

class ChooseBreed extends Component {

  componentDidMount() {
      this.props.loadBreeds()
    }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.changeSelectedBreed(e.target.breedChosen.value)
  }

    render() {
      let breedList = this.props.breeds.map(breed => <option name="breedChosen" key={breed} value={breed}> {breed} </option>)
      return (
      <div>
        <h2 className="header-secondary">Selected Breed: {this.props.selectedBreed}</h2>
        <p className="options-header">Breeds</p>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <select name="breedChosen" >
          {breedList}
          </select>
          <input className="button" type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedBreed: state.selectedBreed,
  breeds: state.breeds
})

const mapDispatchToProps = (dispatch) => ({
  loadBreeds: () => dispatch(loadBreeds()),
  changeSelectedBreed: (breed) => dispatch({type: 'CHANGE_SELECTED_BREED', payload: breed})
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBreed)
