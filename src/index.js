import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/app/";

import "./index.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 26,
    };
    // this.nextYear = () => {
    //   this.setState((state) => ({
    //     age: ++state.age,
    //   }));
    // };
  }

  nextYear = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { age } = this.state;
    return (
      <>
        <h1>
          My name - {name}, surname - {surname}, years - {age}
        </h1>
        <a href={link}>My profile</a>
        <button onClick={this.nextYear}>++</button>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="ya.ru" />
      <WhoAmI name="Denny" surname="Smith" link="google.ru" />
      <WhoAmI name="Ann" surname="Zapf" link="yandex.ru" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
