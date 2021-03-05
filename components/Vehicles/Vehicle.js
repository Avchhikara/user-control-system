import React, { useState } from "react";

export default function Vehicle(props) {
  const { registrationNumber, showActivity, closeActivity } = props;
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div
      className="flex flex-row justify-between pl-3 pr-3 cursor-pointer border-gray-100 border-2 rounded my-2 bg-gray-100 "
      onClick={() => {
        if (isOpen) closeActivity();
        if (!isOpen) showActivity(registrationNumber);
        toggleOpen(!isOpen);
      }}
    >
      <div>
        <strong>{registrationNumber}</strong>
      </div>
      <div>{isOpen ? "➡️" : ""}</div>
    </div>
  );
}
