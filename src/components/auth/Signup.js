import React from "react";
import axios from "axios";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async handleSubmit(e) {
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
        <div class="ui four column centered grid" style={{ marginTop: "50px" }}>
          <div class="column">
            <form class="ui form">
              <div class="field">
                <label>First Name</label>
                <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div class="field">
                <label>Last Name</label>
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
              <div class="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div class="field">
                <label>Password</label>
                <input type="text" name="password" placeholder="Password" />
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
                onSubmit={e => this.handleSubmit(e)}
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
