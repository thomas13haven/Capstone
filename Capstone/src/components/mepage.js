import React, { Component } from 'react';

 class MeContent extends Component {
  render() {
    return (
      <div className="MeContent">

      <div className="Content">

      <div className="MainDescription">
      <h1 className="Title">About Me</h1>
      <p className="Info">Hey, there, This section will include some limited ifo on me however I plan to add more to this list as I gain more and more favorites but as for now go ahead and see what I like to do.</p>
      </div>

      <div className="Description">
      <h1 className="Title">My Favorites</h1>
      <div className="Info">
      <div className="Content">
      <a href="music">My Favorite Music</a>
      </div>
      <div className="Content">
      <a href="games">My Favorite Games</a>
      </div>
      <div className="Content">
      <a href="shows">My Favorite Shows</a>
      </div>
      <div className="Content">
      <a href="youtubers">My Favorite Youtubers</a>
      </div>
      <div className="Content">
      <a href="animals">My Favorite Animals</a>    
      </div> 
      </div>
      </div>

      
    </div>
      </div>
    );
  }
}

export default MeContent;