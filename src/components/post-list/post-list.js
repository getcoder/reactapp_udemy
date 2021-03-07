import React from "react";

import PostListItem from "../post-list-item/post-list-item";

import "./post-list.css";

const PostList = ({ posts, onDelete }) => {
  const postsList = posts.map(({ label, important, id }) => {
    return (
      <li className="list-group-item" key={id}>
        <PostListItem
          label={label}
          important={important}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{postsList}</ul>;
};

export default PostList;
