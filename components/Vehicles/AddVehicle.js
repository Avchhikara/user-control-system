import React, { useState } from "react";

export default function AddVehicle(props) {
  return (
    <div className="mt-4">
      <form
        className="flex flex-row justify-around"
        onSubmit={props.addVehicle}
      >
        <label htmlFor="regNo">Registration no.: </label>
        <input
          type="text"
          className="border-2 border-gray-400 rounded flex-grow mx-2"
          placeholder="enter registration number"
          name="registrationNumber"
          id="regNo"
        />
        <button
          type="submit"
          className="border-2 border-blue-400 p-1 rounded pl-2 pr-2 hover:bg-blue-300 hover:text-white text-sm"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
}
