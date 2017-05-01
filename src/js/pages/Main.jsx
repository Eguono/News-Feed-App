import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div className="slider fullscreen">

        <ul className="slides">
          <li>
            <img src="./img/Veliko.jpg" alt="Landing page" />
            <div className="caption center-align">
              <h3>Welcome to E-News</h3>
              <h5 className="light grey-text text-lighten-3">
                Sign in to recieve the latest from around the world
              </h5>
              <div id="my-signin2" className="center-align" />
            </div>
          </li>
        </ul>

      </div>
    );
  }
}
