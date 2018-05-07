/*eslint-disable no-unreachable, no-extra-semi, no-unused-vars, no-undef, unknown-require, forbiddenExportImport, semi, no-const-assign, check-tern-plugin*/
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link, NavLink } from "react-router-dom";

import bg from "../../bg.jpg";

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
              onClick={e => {
                if (!this.props.auth) {
                  window.location.href = "/";
                  setTimeout(() => {
                    document.body.style.backgroundImage = `url(${bg})`;
                  }, 250);
                }
                this.setState({ home: "active", login: "", signup: "" });
              }}
            >
              Home
            </a>

            <div
              class="right menu"
              style={{
                display: this.props.auth ? "none" : "inline-flex"
              }}
            >
              <Link
                class={`${this.state.login} item`}
                onClick={e =>
                  this.setState({ home: "", login: "active", signup: "" })
                }
                to="/login"
              >
                Login
              </Link>
              <Link
                class={`${this.state.signup} item`}
                onClick={e =>
                  this.setState({ home: "", login: "", signup: "active" })
                }
                to="/signup"
              >
                Signup
              </Link>
            </div>

            <div
              class="right menu"
              style={{
                display: this.props.auth ? "inline-flex" : "none"
              }}
            >
              <a class="item">Walmart</a>
              <a class="item">Target</a>
              <a
                class="item"
                onClick={e => {
                  window.open(
                    `https://a07cae693dbc4ff0b97e09bfc02303fc.vfs.cloud9.us-west-2.amazonaws.com/supplier/add-item/${
                      this.props.auth ? this.props.auth.id : ""
                    }/${this.props.auth ? this.props.auth.userId : ""}`,
                    "_blank"
                  );
                }}
              >
                Pickle
              </a>
              <a class="item">Safeway</a>
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
