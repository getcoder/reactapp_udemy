import React from "react";

import "./post-list-item.css";

class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: props.important,
      like: false,
    };
  }

  onImportant = () => {
    this.setState({
      important: !this.state.important,
    });
  };

  onLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    const { important, like } = this.state;
    const { label, onDelete } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }

    return (
      <div className={classNames}>
        <span onClick={this.onLike} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            onClick={this.onImportant}
            className="btn-star btn-sm"
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" onClick={onDelete} className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}

// const PostListItem = ({ label, important = false }) => {
//   let classNames = "app-list-item d-flex justify-content-between";
//   if (important) {
//     classNames += " important";
//   }

//   return (
//     <div className={classNames}>
//       <span className="app-list-item-label">{label}</span>
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-star btn-sm">
//           <i className="fa fa-star"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fa fa-trash-o"></i>
//         </button>
//         <i className="fa fa-heart"></i>
//       </div>
//     </div>
//   );
// };

export default PostListItem;
