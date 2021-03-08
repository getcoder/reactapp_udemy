import React from "react";

import "./post-status-filter.css";

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "Все" },
      { name: "like", label: "Понравившееся" },
    ];
  }
  render() {
    const { onFilterSelect, filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name;
      const dopClass = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          onClick={() => onFilterSelect(name)}
          type="button"
          className={`btn ${dopClass}`}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
