import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadBreeds} from '../redux/actions'

class ChooseBreed extends Component {

  componentDidMount() {
      this.props.loadBreeds()
    }

    render() {

      let breedList = this.props.breeds.map(breed => <div key={breed} onClick={(e) => this.props.changeSelectedBreed(e.target.innerText)}> {breed} </div>)
      return (
      <div>
        <h2>Selected Breed: {this.props.selectedBreed}</h2>
        <p>Breeds:</p>
        {breedList}
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
