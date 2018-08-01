import React, { Component } from 'react';

 class MeContent extends Component {
  render() {
    return (
      <div className="MeContent">

      <div className="Content">

      <div className="MainDescription">
      <h1 className="Title">Wow I just did this</h1>
      <p className="Info">If I write this in the third person again it will screw me up, Here a certain screen that will hopefully teach you guys a little bit about Thomas: I mean Me.</p>
      </div>

      <div className="Description">
      <h1 className="Title">My Favorites</h1>
      <p className="Info">
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
      </p>
      </div>

      
    </div>
      </div>
    );
  }
}

export default MeContent;