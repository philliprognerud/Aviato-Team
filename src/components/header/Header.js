import React from "react";
import axios from "axios";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { home: true, login: false, signup: false };
  }

  render() {
    return (
      <div>
        <div class="ui inverted segment" style={{ borderRadius: "0px" }}>
          <div class="ui inverted secondary pointing menu">
            <a
              class={`${this.state.home ? "active" : ""} item`}
              onClick={e =>
                this.setState({ home: true, login: false, signup: false })
              }
            >
              Home
            </a>
            <div class="right menu">
              <a
                class={`${this.state.login ? "active" : ""} item`}
                onClick={e =>
                  this.setState({ home: false, login: true, signup: false })
                }
                href="/login"
              >
                Login
              </a>
              <a
                class={`${this.state.signup ? "active" : ""} item`}
                onClick={e =>
                  this.setState({ home: false, login: false, signup: true })
                }
                href="/signup"
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
