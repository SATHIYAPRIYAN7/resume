import React from 'react'

function Profile() {

    const img ={
        width:"200px"
    }

    const profile1={
        display:"flex",
        alignItems:"center"
    }
  return (
    <div>
    <div style={profile1}>
        <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1698386655~exp=1698387255~hmac=86e96d221878f7ccce854f06ff7265a74898674617b53fe927687a82403c8457" style={img}></img>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft:"20px"}}>
            <h1 style={{fontSize:"30px"}}> SATHIYAPRIYAN</h1>
            <p style={{marginTop:"-10px"}}>Web Developer</p>
        </div>
        <div style={{border:"2px solid black",height:"200px",marginLeft:"20px"}}></div>
        <div style={{fontSize:"13px",marginLeft:"20px"}}> 
            <p>I specialize in writing long-form blog contnet,case studies, e-books, and white papers for B2B,tech startups and marketing agencies.</p>
            <p><b>Email:</b>    sathiyapriyan@gmail.com</p>
            <p><b>Website</b>   mywebsite.com</p>
        </div>
        
    </div>
    <div style={{border:"2px solid black",width:"73%",marginLeft:"210px"}}></div>
    </div>
  )
}

export default Profile