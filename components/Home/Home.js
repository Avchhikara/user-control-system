import React from "react";

import Header from "./../Header";
import Footer from "./../Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="mx-auto mt-4 flex flex-row  justify-around"
        style={{ maxWidth: "80%" }}
      >
        <div className="font-mono ">
          <p className="mb-2">
            ever had any problems at the entry of a premises?
          </p>
          <span>Well, with </span>{" "}
          <div className="text-2xl mb-4 mt-4">
            CV based entry management system
          </div>
          <p>,you can can rest assured for the next entry</p>
          <ul className="mt-4">
            In it, you can:
            <li className="mt-3">
              ▶️ add a new vehicle just by adding it's registration number
            </li>
            <li className="mt-3">▶️ view the entry logs of your vehicles</li>
          </ul>
          <hr className="mt-4" />
          <p className="mt-8">
            It's a new, fast and effecient way of handling all this.
            <br /> It reduces the need of human interaction and autamote
            most parts of the entry process.
          </p>
        </div>
        <div className="">
          <Image
            src="https://res.cloudinary.com/mrmagician/image/upload/v1615208581/car_at_entry_qa6hut.png"
            alt="car at entry"
            width="fill"
            height="fill"
            className="rounded"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
