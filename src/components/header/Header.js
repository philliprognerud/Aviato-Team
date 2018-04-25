import React from "react";
import axios from "axios";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { home: "", login: "", signup: "" };
  }

  componentDidMount() {
    let path = window.location.pathname;

    if (path === "/") {
      this.setState({ home: "active", login: "", signup: "" });
    } else if (path === "/login") {
      this.setState({ home: "", login: "active", signup: "" });
    } else if (path === "/signup") {
      this.setState({ home: "", login: "", signup: "active" });
    }
  }

  render() {
    return (
      <div>
        <div class="ui inverted segment" style={{ borderRadius: "0px" }}>
          <div class="ui inverted secondary pointing menu">
            <a
              class={`${this.state.home} item`}
              onClick={e =>
                this.setState({ home: "active", login: "", signup: "" })
              }
            >
              Home
            </a>
            <div class="right menu">
              <a
                class={`${this.state.login} item`}
                onClick={e =>
                  this.setState({ home: "", login: "active", signup: "" })
                }
                href="/login"
              >
                Login
              </a>
              <a
                class={`${this.state.signup} item`}
                onClick={e =>
                  this.setState({ home: "", login: "", signup: "active" })
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
