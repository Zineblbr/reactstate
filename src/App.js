import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "Zineb LOUBAR",
      bio: "I am a web developer",
      imgSrc: "./Images/ProfilePhoto.png",
      profession: "Freelancer",
    },
    show: false,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <div className="containerStyle">
        <div className="card cardStyle">
          <button
            className="btn btn-primary btn-lg my-3 "
            onClick={this.toggleShow}
          >
            Toggle Show
          </button>
          {this.state.show ? (
            <div>
              <img
                className="rounded-circle profilePhoto"
                src={this.state.person.imgSrc}
                alt="person"
              />
              <h3>{this.state.person.fullName}</h3>
              <p>{this.state.person.bio}</p>
              <p>Profession: {this.state.person.profession}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
