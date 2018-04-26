import React from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import { connect } from "react-redux";
import * as actions from "../../actions";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { user: null };

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.setOktaSession = this.setOktaSession.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth) {
      this.setOktaSession();
    }
  }

  showLogin() {
    this.props.renderWidget();
  }

  logout() {
    this.widget.signOut(() => {
      this.props.setOktaUser();

      this.showLogin();
    });
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
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(LoginPage);
