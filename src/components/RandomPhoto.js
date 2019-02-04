import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../redux/actions'

class RandomBreed extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <button className="button" onClick={this.props.fetchImage}>RANDOM DOG</button>
        <img className="image-main" src={this.props.image}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  image: state.image
})

const mapDispatchToProps = (dispatch) => ({
    fetchImage: () => dispatch(fetchImage())
})

export default connect(mapStateToProps, mapDispatchToProps)(RandomBreed)
