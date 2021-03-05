import React, { Component } from "react";

import { withRouter } from "next/router";

import Header from "./../Header";
import Footer from "./../Footer";
import Vehicles from "./../Vehicles";
import VehicleLogs from "./../VehicleLogs";

import { isLoggedIn, getUserDetails } from "./../../utils/loginUser";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        show: false,
        registrationNumber: "",
      },
    };
  }

  componentDidMount() {
    if (!isLoggedIn()) this.props.router.push("/login");
  }

  showActivity = (regNum) => {
    this.setState({
      activity: {
        show: true,
        registrationNumber: regNum,
      },
    });
  };

  closeActivity = () => {
    this.setState({
      activity: {
        show: false,
        registrationNumber: "",
      },
    });
  };

  render() {
    if (!isLoggedIn())
      return <div>You're not allowed to visit this page directly!</div>;

    const { name, userId } = getUserDetails();

    return (
      <div>
        <Header />
        <div
          className="grid mt-4 grid-flow-col gap-x-5 mx-auto grid-cols-2"
          style={{ maxWidth: "90%" }}
        >
          <div className="">
            Hi <span className=" text-3xl">{name},</span>
            <div className="mt-2">
              Following are the 🚙 vehciles 🚲 you've added:
            </div>
            <div>
              <Vehicles
                userId={userId}
                showActivity={this.showActivity}
                closeActivity={this.closeActivity}
              />
            </div>
          </div>
          <div className=" col-span-12 text-gray-300">
            {this.state.activity.show &&
            this.state.activity.registrationNumber.length !== 0 ? (
              <VehicleLogs
                registrationNumber={this.state.activity.registrationNumber}
              />
            ) : (
              <>
                enterance activity of the vehicles will be shown here once you
                click on any of the registration number
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Dashboard);
