import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../redux/actions'

class RandomBreed extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <button className="button" onClick={this.props.fetchImage}>RANDOM DOG</button>
        </div>
        <div>
          <img className="image-main" src={this.props.image}/>
        </div>
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
