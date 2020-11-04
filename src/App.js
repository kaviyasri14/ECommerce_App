import React from "react";
import Navbar from "./Navigationbar";
import Footer from "./Footer";
import { Panel } from "./commonComponents/Common.js";
import Tabs from "./commonComponents/Tabs.js";
import { tabitems } from "./metadata/data";
import {
  Coupon,
  Testimonial,
  Collections,
  Quality,
  Poster
} from "./dashboard/Product";
import ProfileForm from "./userAccount/ProfileForm.js";
import Order from "./userAccount/Order.js";
import grish from "./images/grish.png";
import Mobnav from "./Mobilenav.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileDevice: false,
      isTabletDevice: false,
      testimonialgrid: 3,
      selectedPanel: 1,
      pathinroutearr: this.props.routes,
      routeval: 0
    };
  }
  componentDidMount() {
    this.setState({
      isTabletDevice: window.innerWidth <= 1080 && window.innerWidth > 440
    });
    this.setState({ isMobileDevice: window.innerWidth <= 440 });
    this.setTestimonialTab();
    window.onpopstate = (ev) => {
      this.setState({
        pathinroutearr: window.location.pathname.split("/").slice(1)
      });
    };

    window.addEventListener("resize", () => {
      this.setState({ isMobileDevice: window.innerWidth <= 440 });
      this.setState({
        isTabletDevice: window.innerWidth <= 1080 && window.innerWidth > 440
      });
      this.setTestimonialTab();
    });
  }
  setTestimonialTab() {
    if (!this.state.isMobileDevice && !this.state.isTabletDevice) {
      this.setState({ testimonialgrid: 3 });
    } else if (this.state.isTabletDevice && !this.state.isMobileDevice) {
      this.setState({ testimonialgrid: 2 });
    } else {
      this.setState({ testimonialgrid: 1 });
    }
  }
  render() {
    return (
      <div>
        <Navbar
          menuSelecion={(path) => {
            window.history.pushState({}, undefined, path);
            this.setState({
              pathinroutearr: path,
              routeval: this.state.routeval + 1
            });
          }}
          routevalue={this.state.routeval}
        />
        {(this.state.isMobileDevice || this.state.isTabletDevice) &&
        this.state.pathinroutearr[0] === "" ? (
          <Mobnav />
        ) : (
          ""
        )}
        {this.state.pathinroutearr[0] === "" ? (
          <>
            <Poster
              mobile={this.state.isMobileDevice}
              tab={this.state.isTabletDevice}
            />
            <Quality />
            <Collections />

            <Testimonial tabs={this.state.testimonialgrid} />
            <Coupon
              size={
                !this.state.isMobileDevice && !this.state.isTabletDevice
                  ? "small"
                  : "medium"
              }
            />
          </>
        ) : (
          <div>
            <div
              className={`${
                !this.state.isMobileDevice
                  ? "position userContainer"
                  : "userContainer desktopuserdetail"
              }`}
            >
              {!this.state.isMobileDevice ? (
                <h4 className="home">Home |</h4>
              ) : (
                ""
              )}
              <img className="userimage" src={grish} alt="usr" />
              <p className="username">Grishk</p>
              <br />
              <p className="useremail">grishk@gmail.com</p>
              <br />
            </div>
            <Tabs
              tabitems={tabitems}
              preselect={this.state.selectedPanel}
              selectedtab={(id) => {
                this.setState({
                  selectedPanel: id
                });
              }}
            >
              <Panel
                panelId={1}
                Mobile={this.state.isMobileDevice}
                panelTitle={"My Profile"}
                panelSubtitle={"notifications,password"}
                selectedtab={(id) => {
                  this.setState({
                    selectedPanel: id
                  });
                }}
                SelectedPane={this.state.selectedPanel}
              >
                <ProfileForm isMobileDevice={this.state.isMobileDevice} />
              </Panel>
              <Panel
                panelId={2}
                Mobile={this.state.isMobileDevice}
                panelTitle={"My Orders"}
                panelSubtitle={"Already have 12 orders"}
                selectedtab={(id) => {
                  this.setState({
                    selectedPanel: id
                  });
                }}
                SelectedPane={this.state.selectedPanel}
              >
                <Order isMobileDevice={this.state.isMobileDevice} />
              </Panel>
              <Panel
                panelId={3}
                Mobile={this.state.isMobileDevice}
                panelTitle={"Shipping Address"}
                panelSubtitle={"3 Orders"}
                selectedtab={(id) => {
                  this.setState({
                    selectedPanel: id
                  });
                }}
                SelectedPane={this.state.selectedPanel}
              >
                <div
                  className={`${!this.state.isMobileDevice ? "boxing" : ""}`}
                >
                  <h1 className="shipping">ADDRESS DETAILS</h1>
                </div>
              </Panel>
            </Tabs>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
