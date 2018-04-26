import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

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

  componentDidUpdate() {
    $(".ui.dropdown").dropdown();
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
              href="/"
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
              class="ui right pointing dropdown link item"
              style={{
                display: this.props.auth ? "block" : "none"
              }}
            >
              <span class="text">Store</span>
              <i class="dropdown icon" />
              <div class="menu">
                <div class="header">Add Items</div>
                <div class="item">Home Goods</div>
                <div class="item">Bedroom</div>
                <div class="item">Status</div>
                <div class="item">Cancellations</div>
              </div>
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

export default connect(mapStateToProps)(Header);
