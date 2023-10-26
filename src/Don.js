import React from 'react'

function Don() {

   const head={
    display:"flex",
    justifyContent:"space-evenly",
    backgroundColor:"white",
    height:"85px"
   }

  const imgStyle={
    width:"120px",
    marginLeft:"60px",
    marginRight:"60px"
  }

  const headleft={
    display:"flex",
   // width:"50%",
   flex:"1",
   // justifyContent:"space-between",
    alignItems:"center"
  }

  const para={
    marginRight:"40px",
    cursor:"pointer",
    fontWeight:"bold"
  }

  const headright={
    display:"flex",
    flex:"1",
    //width:"50%",
    justifyContent:"flex-end",
    alignItems:"center",
    marginRight:"60px"
  }

  const btn={
    padding:"10px 25px",
    backgroundColor:"green",
    color:"white",
    outline:"none",
    border:"none",
    fontWeight:"bold",
    cursor:"pointer"
  }
  return (
    <div style={head}>
    <div style={headleft}> 
     <img  src="https://1000logos.net/wp-content/uploads/2021/12/Hootsuite-Logo-2014-1536x864.png" style={imgStyle}></img>
     <p style={para}>Platform</p>
     <p style={para}>Plans</p>
     <p style={para}>Enterprise</p>
     <p style={para}>Resources</p>
     <p style={para}>Education</p>
    </div>


     <div style={headright}>
          
        <p style={para}>Contact Us</p>
        <p style={para}>Log In</p>

        <button style={btn}>Sign Up</button>

     </div>

    </div>
  )
}

export default Don

