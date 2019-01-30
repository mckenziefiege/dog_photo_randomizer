import React from 'react'
import {connect} from 'react-redux'

const ChooseBreed = ({breed}) => {
  console.log(breed)
  return (
    <div>
      <h2>{breed}</h2>
    </div>
  )
}

const mapStateToProps = (state) => ({
  breed: state.breed
})

export default connect(mapStateToProps)(ChooseBreed)
