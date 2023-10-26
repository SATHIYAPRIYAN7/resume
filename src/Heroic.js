import React from 'react'

function Heroic() {

    const hero={
        height:"350px",
        backgroundColor:"#19325b",
        color:"white",
        display:"flex",
        justifyContent:"",
        flexDirection:"column",
        alignItems:"center",
        width:"100%"
    }

    const h1={
        fontSize:"50px"
    }

    const p={
        fontSize:"20px",
        textAlign:"center",
        marginBottom:"50px"
    }

    const btn={
       padding:"15px 30px",
       backgroundColor:"green",
       outline:"none",
       border:"none",
       color:"white",
       fontWeight:"bold"
    }
  return (
    <div style={hero}>

        <h1 style={h1}>See value from social sooner</h1>
        <p style={p}>Our training and strategic have helped<br />thousands of organisation succeed on social</p>
        <button style={btn}>Request a demo</button>

    </div>
  )
}

export default Heroic