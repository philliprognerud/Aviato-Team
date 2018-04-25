import React from "react";
import axios from "axios";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { home: true, login: false, signup: false };
  }

  async handleClick(e) {
    let res = await axios.post(
      "http://ec2-34-217-31-45.us-west-2.compute.amazonaws.com:8000/api/add-okta-user",
      {
        firstName: "tim21",
        lastName: "test1241",
        email: "pr35@gmail.com",
        password: "Deskjet700phil"
      }
    );

    console.log(res);
  }

  render() {
    return (
      <div>
        <div class="ui inverted segment" style={{ borderRadius: "0px" }}>
          <div class="ui inverted secondary pointing menu">
            <a class={`${this.state.home ? "active" : ""} item`}>Home</a>
            <div class="right menu">
              <a
                class={`${this.state.login ? "active" : ""} item`}
                href="/login"
              >
                Login
              </a>
              <a
                class={`${this.state.signup ? "active" : ""} item`}
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
