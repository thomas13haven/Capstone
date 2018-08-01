import React, { Component } from "react";

export default class Music extends Component {
  render() {
    return (
      <div className="SubTitle">
        <div className="FavTitle">
          <h1>My Favorite Music</h1>
        </div>
        <div className="LinksMusic">
          <div className="Info">
            <a
              href="https://www.youtube.com/channel/UCPfjB94mhe8Gsnd9qIzUKHA"
              target="_blank"
            >
              1. Jameski
            </a>
          </div>
          <div className="Info">
            <a
              href="https://www.youtube.com/user/loudnessfete"
              target="_blank"
            >
              2. Ujico
            </a>
          </div>
          <div className="Info">
            <a
              href="https://www.youtube.com/user/HeyImBee"
              target="_blank"
            >
              3. HeyImBee
            </a>
          </div>
          <div className="Info">
            <a
              href="https://www.youtube.com/channel/UCwkm_Wcyh0pc7UUmZZfL-6w"
              target="_blank"
            >
              4. Donut Operator
            </a>
          </div>
          <div className="Info">
            <a
              href="https://www.youtube.com/channel/UCqhU241-th5wB3fDIGf0JlQ"
              target="_blank"
            >
              5. Foxy
            </a>
          </div>
          <div className="Info">
            <a
              href="https://www.youtube.com/channel/UCKHR-onQ7E0vyrEWgxiRljQ"
              target="_blank"
            >
              6. Kingani
            </a>
          </div>
        </div>
      </div>
    );
  }
}
