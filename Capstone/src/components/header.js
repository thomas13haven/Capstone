import React, { Component } from 'react';
// import Email from './email';


class Header extends Component {
  
  

  render() {
    
   


    return (
     
      <nav>
      
      <div className="NewTitle">
      <h1>Thomas Perkins</h1>
      </div>
      <div className="header">
        <div className="header__nav">
        <div className="header__home">
        <a href="/"><i className="fas fa-home"></i></a>
        
        </div> 
        <div className="header__jobs">
        <a href="jobpage" id="1" onClick= {() => console.log('trying to switch')}>Jobs</a>
        <div className="drop1">
        Take a look at all the exciting things I have done in the past, also notice the striking list of things I am doing and planning to do! 
      </div>
        </div>     


        <div className="header__school">
        <a href="schoolpage" id="2">School</a>
        <div className="drop2">
      View what schooling I have gone thru and the different things I have enjoyed. See my school story.
      </div>
        </div>


        <div className="header__about-me">
        <a href="mepage" id="3"> Me </a>
        <div className="drop3">
      Take a insightfull look at what I am up to. Learn about his favorite things in life.
    </div>
        </div>  

        <div className="Imager">
      <a href="random"><i className="fas fa-random"><i className="fas fa-images"></i></i></a>
      <div className="drop4">
     Random Images?.
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