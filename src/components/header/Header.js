/*eslint-disable no-unreachable, no-extra-semi, no-unused-vars, no-undef, unknown-require, forbiddenExportImport, semi, no-const-assign, check-tern-plugin*/
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Header extends React.Component {
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
        <div
          class="ui inverted segment"
          style={{ borderRadius: "0px", boxShadow: "0 2px 8px black" }}
        >
          <div class="ui inverted secondary pointing menu">
            <a
              class={`${this.state.home} ${
                this.props.auth ? "active" : ""
              } item`}
              onClick={e =>
                this.setState({ home: "active", login: "", signup: "" })
              }
            >
              Home
            </a>

            <div
              class="right menu"
              style={{
                display: this.props.auth ? "none" : "inline-flex"
              }}
            >
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

            <div
              class="right menu"
              style={{
                display: this.props.auth ? "inline-flex" : "none"
              }}
            >
              <div
                class="ui dropdown link item"
                style={{
                  display: this.props.auth ? "block" : "none"
                }}
              >
                <span class="text">Stores</span>
                <i class="dropdown icon" />
                <div class="menu">
                  <div class="item">Walmart</div>
                  <div class="item">Target</div>
                  <div class="item">Pickle</div>
                  <div class="item">Safeway</div>
                </div>
              </div>
              <a class="item" onClick={e => this.props.triggerLogout()}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
