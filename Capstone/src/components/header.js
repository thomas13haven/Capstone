import React, { Component } from 'react';



class Header extends Component {



  render() {
    
    


    return (
      <div className="header">
        <div className="header__nav">
        <div className="header__home">
        <i class="fas fa-home"></i>
        
        </div> 
        <div className="header__jobs">
        <a href="job-page" id="1">My Experience</a>
        <div className="drop1">
        Take a look at all the exciting things Thomas has done in the past, also notice the striking list of things he is doing and is planning to do! 
      </div>
        </div>     


        <div className="header__school">
        <a href="school-page" id="2"> Education </a>
        <div className="drop2">
      View what schooling Thomas has gone thru and the different things he has enjoyed. See what he wants to do in the future and what he plans on learning! 
      </div>
        </div>


        <div className="header__about-me">
        <a href="me-page" id="3"> About Me </a>
        <div className="drop3">
      Take a insightfull look at what Thomas does for fun and how he is as a person in this life this is his description.
    </div>
        </div>  
        
         
        </div> 
       
        
        <div className="header__contact">
        <h1> Contact Me </h1>
        </div> 
      </div>
    );
  }
}

export default Header;