import React from "react";
import axios from "axios";

export default class Header extends React.Component {
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
        <div class="ui inverted segment">
          <div class="ui inverted secondary pointing menu">
            <a class="active item">Home</a>
            <a class="item" onClick={e => this.handleClick(e)}>
              Test POST
            </a>
            <a class="item" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}
