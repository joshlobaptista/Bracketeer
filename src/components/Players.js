import React from 'react' 

const Players = (props) => {
  const { onChange } = props
  return (
    <div>
      <label>How many players? </label>
      <input type='text' onChange={(val) => onChange(val)}></input>
    </div>
  )
}

export default Players