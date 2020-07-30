import React, { Component } from "react";
import ArticleList from "./ArticleList/index";
import articles from "../fixtures";
import "bootstrap/dist/css/bootstrap.css";

// function App() {
//     return (
//       <div className = 'container'>
//         <div className='jumbotron'>
//         <h1 className='display-3'>App name</h1>
//         </div>
//         <ArticleList articles={articles} />
//       </div>
//     )
//   }
//   для работы со стейтами переделали под класс

class App extends Component {
  state = {
    reverted: false,
  }

  render() {
    return(
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">App name
        <button className='btn' onClick={this.revert}>revert</button></h1>
      </div>
      <ArticleList articles={this.state.reverted ? articles.reverse() : articles} />
    </div>
    )
}
revert = () => this.setState({
  reverted: !this.state.reverted
})
}

export default App;
