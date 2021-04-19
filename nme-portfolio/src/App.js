
import './App.css';
import About from "./components/about";
import Sidebar from "./components/sidebar";
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div>
          <About/>
        </div>
      </div>
    )
  }
}
export default App;
