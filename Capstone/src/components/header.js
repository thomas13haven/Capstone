import React, { Component } from 'react';
// import Email from './email';


class Header extends Component {
  
  

  render() {
    
   


    return (
     
      <nav>
      <div className="header">
        <div className="header__nav">
        <div className="header__home">
        <a href="home"><i className="fas fa-home"></i></a>
        
        </div> 
        <div className="header__jobs">
        <a href="jobpage" id="1" onClick= {() => console.log('trying to switch')}>My Experience</a>
        <div className="drop1">
        Take a look at all the exciting things Thomas has done in the past, also notice the striking list of things he is doing and is planning to do! 
      </div>
        </div>     


        <div className="header__school">
        <a href="schoolpage" id="2"> Education </a>
        <div className="drop2">
      View what schooling Thomas has gone thru and the different things he has enjoyed. See what he wants to do in the future and what he plans on learning! 
      </div>
        </div>


        <div className="header__about-me">
        <a href="mepage" id="3"> About Me </a>
        <div className="drop3">
      Take a insightfull look at what Thomas is up to. Learn about his indevors.
    </div>
        </div>  
        
         
        </div> 
       
        
        <div className="header__contact">
        <a href="contactpage"> Contact Me </a>
        </div> 
      </div>
      </nav>
    );
  }
}



export default Header;