import React, { Component } from "react";

import Vehicle from "./Vehicle";
import AddVehicle from "./AddVehicle";

export default class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    // Make a fetch for the vehicles registrated under current user
    await this.getVehicles();
  };

  getVehicles = async () => {
    this.setState((prevState) => ({
      ...prevState,
      vehicles: [],
      isLoading: true,
    }));
    const resp = await fetch("/api/getVehicles", {
      method: "POST",
      body: JSON.stringify({
        userId: this.props.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    //   console.log(data);
    this.setState((prevState) => ({
      ...prevState,
      vehicles: data.vehicles,
      isLoading: false,
    }));
  };

  deleteVehicle = async (registrationNumber) => {
    const resp = await fetch("/api/deleteVehicle", {
      method: "POST",
      body: JSON.stringify({
        userId: this.props.userId,
        registrationNumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await resp.json();
    await this.getVehicles();
  };

  onVehicleAdd = async (e) => {
    e.preventDefault();
    // console.log("On click");
    // this.setState((prevState) => ({
    //   ...prevState,
    //   vehicles: [],
    //   isLoading: true,
    // }));
    const registrationNumberr = e.target.querySelector("#regNo").value;
    const resp = await fetch("/api/addVehicle", {
      method: "POST",
      body: JSON.stringify({
        registrationNumber: registrationNumberr,
        userId: this.props.userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await resp.json();
    await this.getVehicles();

    e.target.querySelector("#regNo").value = "";
  };

  render() {
    if (this.state.vehicles.length === 0 && !this.state.isLoading)
      return (
        <div>
          you don't have any vehicle added, please click on Add button above to
          add a vehicle
          <AddVehicle addVehicle={this.onVehicleAdd} />
        </div>
      );

    if (this.state.vehicles.length === 0 && this.state.isLoading) {
      return <div className="mx-auto">getting the vehicles...</div>;
    }
    // otherwise, returning a list of vehicles
    return (
      <>
        {this.state.vehicles.map((vehicle, index) => (
          <Vehicle
            registrationNumber={vehicle.registrationNumber}
            showActivity={this.props.showActivity}
            key={vehicle.registrationNumber + index}
            closeActivity={this.props.closeActivity}
            deleteVehicle={this.deleteVehicle}
          />
        ))}
        <AddVehicle addVehicle={this.onVehicleAdd} />
      </>
    );
  }
}
