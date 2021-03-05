import React, { useState } from "react";

export default function Card(props) {
  const date = new Date(props.timestamp);
  console.log(date);
  return (
    <div className="border-2 border-gray-200 my-1 p-1 text-gray-700">
      entry on {date.getDate()}-{date.getMonth()}-{date.getFullYear()} at{" "}
      {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} hours
    </div>
  );
}
