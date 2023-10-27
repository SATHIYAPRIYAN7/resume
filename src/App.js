
import React from "react";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Icon from "./components/Icon";



function App() {

  const style1={
    backgroundColor:"white",
    maxWidth:"800px",
    margin:"auto",
    minHeight:"100vh"
  }
  
  return (
    <div className="App"  style={style1}>
      <Profile />
      <Work />
      <Skills />
      <Icon />
    </div>
  );
}

export default App;
