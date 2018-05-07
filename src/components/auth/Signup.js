import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import history from "../../history/history.js";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate() {
    if (this.props.registerRes) {
      //window.location.href = "/login";
      history.replace("/");
    } else {
      console.log("there was an error");
    }
  }

  componentDidMount() {
    document.body.style.removeProperty("background-image");
    document.body.style.backgroundColor = "#36538B";
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.props.registerOktaUser(
      this.firstNameVal.value,
      this.lastNameVal.value,
      this.emailVal.value,
      this.passwordVal.value
    );
  }

  render() {
    return (
      <div>
        <div class="ui four column centered grid" style={{ marginTop: "50px" }}>
          <div class="column">
            <div class="ui segment">
              <form class="ui form">
                <div class="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    ref={val => {
                      this.firstNameVal = val;
                    }}
                  />
                </div>
                <div class="field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    ref={val => {
                      this.lastNameVal = val;
                    }}
                  />
                </div>
                <div class="field">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={val => {
                      this.emailVal = val;
                    }}
                  />
                </div>
                <div class="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={val => {
                      this.passwordVal = val;
                    }}
                  />
                </div>
                <div class="field">
                  <div class="ui checkbox">
                    <input type="checkbox" tabindex="0" class="hidden" />
                    <label>I agree to the Terms and Conditions</label>
                  </div>
                </div>
                <button
                  class="ui button"
                  type="submit"
                  onClick={e => this.handleSubmit(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, registerRes }) {
  return { auth, registerRes };
}

export default connect(mapStateToProps, actions)(Signup);
