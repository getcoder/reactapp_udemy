import React from "react";

import PostListItem from "../post-list-item/post-list-item";

import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const postsList = posts.map(({ label, important, id, like }) => {
    return (
      <li className="list-group-item" key={id}>
        <PostListItem
          label={label}
          important={important}
          like={like}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{postsList}</ul>;
};

export default PostList;
