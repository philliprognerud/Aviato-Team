import React from "react";
import OktaSignIn from "@okta/okta-signin-widget";

export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { user: null };
    this.widget = new OktaSignIn({
      baseUrl: "https://dev-842835.oktapreview.com",
      clientId: "0oaeszy1axIjhc08c0h7",
      logo:
        "https://i.pinimg.com/originals/b3/91/81/b39181644e57a6eea4a2df54aee23fac.jpg",
      redirectUri:
        "http://ec2-34-217-31-45.us-west-2.compute.amazonaws.com:3000",
      authParams: {
        responseType: "id_token"
      }
    });

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.widget.session.get(response => {
      if (response.status !== "INACTIVE") {
        this.setState({ user: response.login });
      } else {
        this.showLogin();
      }
    });
  }

  showLogin() {
    // Backbone.history.stop();
    this.widget.renderEl(
      { el: this.loginContainer },
      response => {
        console.log("widget :  " + response);
        this.setState({ user: response.claims.email });
      },
      err => {
        console.log(err);
      }
    );
  }

  logout() {
    this.widget.signOut(() => {
      this.setState({ user: null });
      this.showLogin();
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <div className="container">
            <div>Welcome, {this.state.user}!</div>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {this.state.user ? null : (
          <div
            ref={div => {
              this.loginContainer = div;
            }}
          />
        )}
      </div>
    );
  }
}
