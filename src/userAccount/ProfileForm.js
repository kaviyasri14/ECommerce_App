import React from "react";
import { Input, Button } from "../commonComponents/Common.js";
import "../styles/commonComponents.css";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`${
          !this.props.isMobileDevice ? " profileForm boxing" : "mobProfileForm"
        }`}
      >
        {!this.props.isMobileDevice ? <h3>My Profile</h3> : ""}
        {window.innerWidth >= 950 ? (
          <div className="mobForm">
            <Input type="text" placeholder="First name" />
            &nbsp;
            <Input type="text" placeholder="Last name" />
          </div>
        ) : (
          <div>
            <Input type="text" placeholder="First name" />
            <br />
            <br />
            <Input type="text" placeholder="Last name" />
            <br />
            <br />
          </div>
        )}
        <div className={window.innerWidth >= 950 ? "inpSmall" : ""}>
          <Input type="text" placeholder="Phone number" />
          <br />
          <br />
          <Input type="email" placeholder="Email" />
          <br />
          <br />
          <Input type="password" placeholder="Password" />
          <br />
          <br />
          <Input type="password" placeholder="Confirm Password" />
          <br />
          <br />
        </div>
        {/* <div className="buttoncontainer"> */}
        <Button
          title={window.innerWidth >= 950 ? "ADD NEW ADDRESS" : "SAVE CHANGES"}
          size={window.innerWidth >= 950 ? "large" : "large"}
          type="dark"
        />
        {/* </div> */}
      </div>
    );
  }
}
