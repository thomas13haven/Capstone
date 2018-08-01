import React, { Component } from 'react';

export default class Music extends Component {
  render() {
    return (
      <div className="SubTitle">
      <div className="FavTitle">
      <h1>My Favorite Music</h1>
      </div>
        <div className="LinksMusic">
        <div className="Info">
        <a href="https://www.youtube.com/watch?v=_uN_D-6xZTc" target="_blank">1. Naruto</a>
        </div>
        <div className="Info">
        <a href="https://www.youtube.com/watch?v=NyM16rLYtEc" target="_blank">2. SpongeBob</a>
        </div>
        <div className="Info">
        <a href="https://www.youtube.com/watch?v=jQWNYlXn5gY" target="_blank">3. Cross Ange</a>
        </div>
        <div className="Info">
        <a href="https://www.youtube.com/watch?v=Uy41ee3ypy8" target="_blank">4. Attack On Titan</a>
        </div>
        <div className="Info">
        <a href="https://www.youtube.com/playlist?list=PLUy_TXfTDW5fp9YxyPlJNjlI1seqz1lbj" target="_blank">5. VR chat in a Nutshell</a>
        </div>
      
        </div>
        </div>
      
    );
  }
}