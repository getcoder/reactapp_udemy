import React from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React", important: true, like: false, id: 1 },
        { label: "That's fine", important: false, like: false, id: 2 },
        { label: "I need a break...", important: false, like: false, id: 3 },
      ],
      search: "",
      filter: "all",
    };
    this.idCounter = 3;
  }

  deleteItem = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: newData,
    });
  };

  addItem = (text) => {
    const newData = [...this.state.data];
    newData.push({
      label: text,
      important: false,
      id: ++this.idCounter,
    });
    this.setState({
      data: newData,
    });
  };

  // onToggleImportant = (id) => {
  //   const newData = [...this.state.data];
  //   const elem = newData.findIndex((item) => item.id === id);
  //   newData[elem].important = !newData[elem].important;
  //   this.setState({
  //     data: newData,
  //   });
  // };

  // onToggleLiked = (id) => {
  //   const newData = [...this.state.data];
  //   const elem = newData.findIndex((item) => item.id === id);
  //   newData[elem].like = !newData[elem].like;
  //   this.setState({
  //     data: newData,
  //   });
  // };

  toggleItem = (item, id) => {
    this.setState((state, props) => {
      const newData = [...state.data];
      const elem = newData.findIndex((item) => item.id === id);
      newData[elem][item] = !newData[elem][item];
      return {
        data: newData,
      };
    });
  };

  onToggleImportant = (id) => {
    // this.setState((state, props) => {
    //   const newData = [...state.data];
    //   const elem = newData.findIndex((item) => item.id === id);
    //   newData[elem].important = !newData[elem].important;
    //   return {
    //     data: newData,
    //   };
    // });
    this.toggleItem("important", id);
  };

  onToggleLiked = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((item) => item.id === id);

    //   const old = data[index];
    //   const newItem = { ...old, like: !old.like };

    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];

    //   return {
    //     data: newArr,
    //   };
    // });
    this.toggleItem("like", id);
  };

  searchPosts = (items, search) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => item.label.indexOf(search) > -1);
  };

  filterPosts = (items, filter) => {
    switch (filter) {
      case "like":
        return items.filter((item) => item.like);
      case "all":
        return items;

      default:
        return items;
    }
  };

  onUpdateSearch = (search) => {
    this.setState({ search });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, search, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const posts = data.length;

    const visiblePosts = this.filterPosts(
      this.searchPosts(data, search),
      filter
    );

    return (
      <div className="app">
        {/* <h1>Hello</h1> */}
        <AppHeader posts={posts} liked={liked} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
