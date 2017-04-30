import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav id="nav">
          <ul class>
            <li><a href="#">Gmail</a></li>
            <li><a href="#">Images</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Maps</a></li>
            <li>
              <a href="#">
                <img class="pic" src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/11885084_1076528895692966_6215947904473078540_n.jpg?oh=51ccbf9e5d3a3ace7a7d6e008fb36621&oe=594B5292"
                  alt="profile pic"></img>
              </a>
            </li>
            </ul>
        </nav>
      </div>
        );
  }
}

