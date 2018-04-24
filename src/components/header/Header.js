import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="ui inverted segment">
          <div class="ui inverted secondary pointing menu">
            <a class="active item">Home</a>
            <a class="item">Messages</a>
            <a class="item" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}
