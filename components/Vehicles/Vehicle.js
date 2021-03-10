import React, { useState } from "react";

export default function Vehicle(props) {
  const {
    registrationNumber,
    showActivity,
    closeActivity,
    deleteVehicle,
  } = props;
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div
      className="flex flex-row justify-between pl-3 pr-3 border-gray-100 border-2 rounded my-2 bg-gray-100 "
      // onClick={}
    >
      <div>
        <strong>{registrationNumber}</strong>
      </div>
      <div>
        {
          // This will accomodate two buttons, delete and view logs
        }
        <button
          className="rounded text-white bg-red-600 border-red-500 px-2 mr-2"
          onClick={() => deleteVehicle(registrationNumber)}
        >
          delete
        </button>
        <button
          className="rounded border-blue-400 bg-blue-600 text-white px-1"
          onClick={() => {
            if (isOpen) closeActivity();
            if (!isOpen) showActivity(registrationNumber);
            toggleOpen(!isOpen);
          }}
        >
          {isOpen ? "hide" : "view"} logs
        </button>
      </div>
    </div>
  );
}
