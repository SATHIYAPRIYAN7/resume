import React from 'react'

function Card(props) {

    const img={
        width:"250px"
    }

    console.log(props.key1)
  return (
    <div>
        <img src={props.key1} style={img}></img>
        <h3>{props.key2}</h3>
        <p>{props.key3}</p>
    </div>
  )
}

export default Card