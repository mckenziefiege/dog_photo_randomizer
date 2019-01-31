import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadBreeds} from '../store/actions'

class ChooseBreed extends Component {

  componentDidMount() {
      this.props.loadBreeds()
    }

    render() {
      console.log(this.props)
      return (
      <div>
        <h2>{this.props.selectedBreed}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedBreed: state.selectedBreed,
  breeds: state.breeds
})

const mapDispatchToProps = (dispatch) => ({
  loadBreeds: () => dispatch(loadBreeds())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBreed)
