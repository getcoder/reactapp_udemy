import React from "react";

import "./post-add-form.css";

class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          onChange={this.onValueChange}
          className="form-control new-post-label"
          value={this.state.text}
        />
        <button
          type="submit"
          // onClick={() => onAdd("Hello")}
          className="btn btn-outline-secondary"
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default PostAddForm;
