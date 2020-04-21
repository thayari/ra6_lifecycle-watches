import React from 'react'

function Clocks(props) {
  return (
    <div className="clocks-container row container-sm mt-4">
      {props.children}
    </div>
  )
}

export default Clocks
