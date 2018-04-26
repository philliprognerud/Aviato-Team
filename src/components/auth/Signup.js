import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate() {
    // if (this.props.registerRes) {
    //   window.location.href = "/login";
    // } else {
    //   console.log("there was an error");
    // }
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
                  type="text"
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
    );
  }
}

function mapStateToProps({ auth, registerRes }) {
  return { auth, registerRes };
}

export default connect(mapStateToProps, actions)(Signup);
