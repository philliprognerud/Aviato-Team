import React from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import { connect } from "react-redux";
import * as actions from "../../actions";

import aviato from "./aviato.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.widget = new OktaSignIn({
      baseUrl: "https://dev-842835.oktapreview.com",
      clientId: "0oaeszy1axIjhc08c0h7",
      logo: `${aviato}`,
      redirectUri: "https://dysl2hoxopw16.cloudfront.net",
      authParams: {
        responseType: "id_token"
      }
    });

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.setOktaSession = this.setOktaSession.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth) {
      this.setOktaSession();
    }

    document.body.style.removeProperty("background-image");
    document.body.style.backgroundColor = "#36538B";
  }

  componentDidUpdate() {
    if (this.props.logoutUser) {
      this.logout();
    }
  }

  setOktaSession() {
    this.widget.session.get(response => {
      if (response.status !== "INACTIVE") {
        this.props.setOktaUser(response);
      } else {
        if (window.location.pathname === "/login/success") {
          window.location.href = "/login";
        }

        this.showLogin();
      }
    });
  }

  showLogin() {
    this.widget.renderEl(
      { el: this.loginContainer },
      response => {
        this.setOktaSession();
        window.location.href = "/login/success";
      },
      err => {
        console.log(err);
      }
    );
  }

  logout() {
    this.widget.signOut(() => {
      this.props.setOktaUser();

      this.showLogin();
    });
  }

  renderLoggedIn() {
    if (window.location.pathname !== "/login/success") {
      window.location.href = "/login/success";
    }

    return (
      <div class="ui three column centered grid" style={{ marginTop: "50px" }}>
        <div class="column">
          <div class="ui segment">
            <p>Welcome, {this.props.auth.login}!</p>
            <a href="https://a07cae693dbc4ff0b97e09bfc02303fc.vfs.cloud9.us-west-2.amazonaws.com/">
              Test pickle application
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {!this.props.auth ? (
          <div
            ref={div => {
              this.loginContainer = div;
            }}
          />
        ) : (
          this.renderLoggedIn()
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth, logoutUser }) {
  return { auth, logoutUser };
}

export default connect(mapStateToProps, actions)(LoginPage);
