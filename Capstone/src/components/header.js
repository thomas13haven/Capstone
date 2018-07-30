import React, { Component } from 'react';
import Drop from './drop-down';

class Header extends Component {


  render() {
    return (
      <div className="header">
        <div className="header__nav">
        <div className="header__home">
        <i class="fas fa-home"></i>
        </div> 
        <div className="header__jobs">
        <h1>My Experience</h1>
        </div>  

        <div className="header__school">
        <h1> Education </h1>
        </div>
        <div className="header__about-me">
        <h1> About Me </h1>
        </div> 
       
        </div>  
        <div className="drops">
        <Drop />
        </div> 
        <div className="header__contact">
        <h1> Contact Me </h1>
        </div> 
      </div>
    );
  }
}

export default Header;