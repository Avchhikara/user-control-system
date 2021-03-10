import React, { Component } from "react";

import VehicleCard from "./Card";

export default class VehicleLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: [],
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    const resp = await fetch("/api/getVehicleLogs", {
      method: "POST",
      body: JSON.stringify({
        registrationNumber: this.props.registrationNumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    this.setState({
      activity: data,
      isLoading: false,
    });
    // console.log(data);
  };

  render() {
    const { isLoading, activity } = this.state;
    const { registrationNumber } = this.props;
    if (isLoading) {
      return <div className="mx-auto">getting vehicle's activity</div>;
    } else if (!isLoading && activity.length === 0) {
      return (
        <div className="mx-auto text-gray-700">
          No activity(entry into premises) yet!
        </div>
      );
    }

    return (
      <div>
        <div className="text-gray-800 text-xl">
          Activity logs for {registrationNumber}👇🏻:{" "}
        </div>
        {activity.map((act, index) => (
          <VehicleCard
            timestamp={act.timestamp}
            key={registrationNumber + act.timestamp + index}
          />
        ))}
      </div>
    );
  }
}
