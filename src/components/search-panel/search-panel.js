import { render } from "@testing-library/react";
import React from "react";

import "./search-panel.css";

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onChange = (e) => {
    const searching = e.target.value;
    this.setState({
      search: searching,
    });
    this.props.onUpdateSearch(searching);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onChange}
      />
    );
  }
}
