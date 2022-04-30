import React, { Component } from 'react'
import "./styles.css";
export default class Profile extends Component {
    
     constructor(props) {
        super(props)
        this.state = {
            TimeApp: 0,
            fullName: "Mohamed Wanna",
            bio: "Licence",
            profession: "Freelance",
            imgSrc: "/images/Myself.jpg",
            show: false,
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ TimeApp: this.state.TimeApp+1 })
        }, 1000);
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
    }
    render() {
        return (

            <div>
                <h3>
                    <span className='titre'>
                        Elapsed Time :
                    </span>
                    <span>
                        {this.state.TimeApp}
                    </span>
                </h3>

                <img src={this.state.imgSrc} alt="Myself" />
                <h3><span className='titre'>Full Name:</span>
                    <span>
                        {
                            this.state.fullName
                        }
                    </span>
                </h3>
                <h3><span className='titre'>Bio:</span>
                    <span>
                        {
                            this.state.bio
                        }
                    </span>
                </h3>
                <h3><span className='titre'>Profession:</span>
                    <span>
                        {
                            this.state.profession
                        }
                    </span>
                </h3>
            </div>
        );
    }
}