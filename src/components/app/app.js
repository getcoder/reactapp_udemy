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
        { label: "Going to learn React", important: true, id: 1 },
        { label: "That's fine", important: false, id: 2 },
        { label: "I need a break...", important: false, id: 3 },
      ],
    };
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
      id: this.state.data.length + 1,
    });
    this.setState({
      data: newData,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        {/* <h1>Hello</h1> */}
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

// const App = () => {
//   const data = [
//     { label: "Going to learn React", important: true, id: "awfc" },
//     { label: "That's fine", important: false, id: "mnsv" },
//     { label: "I need a break...", important: false, id: "preihv" },
//   ];

//   return (
//     <div className="app">
//       {/* <h1>Hello</h1> */}
//       <AppHeader />
//       <div className="search-panel d-flex">
//         <SearchPanel />
//         <PostStatusFilter />
//       </div>
//       <PostList posts={data} onDelete={(id) => console.log(id)} />
//       <PostAddForm />
//     </div>
//   );
// };

export default App;
