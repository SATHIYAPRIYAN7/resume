import React from 'react'
import Card from './Card'

function Cardcontainer() {

    const cc={
        display:"flex",
        justifyContent:"space-evenly",
        textAlign:"center"
        , margin:"40px 0px"
    }
  return (
    <div style={cc}>
       <Card key1="https://img.freepik.com/free-vector/flying-business-rocket-concept-background_1017-33472.jpg" key2="2500" key3="enterprise organisation successfully launched"/>
       <Card key1="https://img.freepik.com/free-vector/personal-site-concept-illustration_114360-2577.jpg" key2="45,000" key3="enterprise users onboarded seamlessly"/>
       <Card key1="https://img.freepik.com/free-vector/chatting-concept-illustration_114360-420.jpg" key2="200,000+" key3="professionals trained on product and strategy"/>
    </div>
  )
}

export default Cardcontainer