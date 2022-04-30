import React, { Component } from 'react'
import "./styles.css"
import Myprofile from './Component/Myprofile'

export default class App extends Component {
  state = {
    TimeApp: 0,
    fullName: "Mohamed Wanna",
    bio: "Licence",
    profession: "Freelance",
    imgSrc: "/images/Myself.jpg",
    show: false,
}

 showMyProfile() {
    this.setState({ show: !this.state.show})
  }
  render() {
    return (
      <div>
      <button onClick={() =>this.setState({ show: !this.state.show})}>Show</button>
        {
          this.state.show ?<Myprofile />:""
        }
      </div>
    );
  }
}


