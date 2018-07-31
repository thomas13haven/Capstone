import React, { Component } from "react";
import Header from './header';
import Title from './title';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
