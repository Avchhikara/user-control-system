import React from "react";

export default function Footer() {
  return (
    <div
      className="border-t-2 p-8 font-mono text-gray-600"
      style={{
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        left: "0",
        bottom: "0",
      }}
    >
      Built by Aayush Sharma (17001003002), Akshit (17001003007), Avnish
      (17001003017), Ayush Bhat (17001003018) as a part of B.tech final year
      project. <br />
      <em className="text-sm">(for educational purposes only)</em>
    </div>
  );
}
