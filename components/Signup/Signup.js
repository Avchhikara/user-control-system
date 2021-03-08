import React, { Component } from "react";

import { withRouter } from "next/router";
import Header from "./../Header";
import Footer from "../Footer";

import { loginUser } from "./../../utils/loginUser";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onSignUp = async (e) => {
    e.preventDefault();
    // console.log(e.target, e.target.querySelector("input[id='email']").value);
    const signupRequest = await fetch(`/api/signup`, {
      method: "POST",
      body: JSON.stringify({
        name: e.target.querySelector("input[id='name']").value,
        email: e.target.querySelector("input[id='email']").value,
        password: e.target.querySelector("input[id='password']").value,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await signupRequest.json();
    loginUser(data.userId, data.name, data.email);
    this.props.router.push("/login");
  };

  render() {
    return (
      <>
        <Header />
        <div className="flex justify-center mt-10">
          <div className="max-w-lg border-4 p-4">
            <div className="flex flex-col justify-items-center text-center pb-6">
              <div className="text-xl">Welcome {":)"}</div>
              <div className="text-sm muted">Signup form</div>
            </div>
            <form method="post" onSubmit={this.onSignUp}>
              <div className="flex flex-row justify-around">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="ml-10 border-2 rounded"
                  placeholder="your name"
                />
              </div>
              <div className="flex flex-row justify-around pt-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="ml-10 border-2 rounded"
                  placeholder="your email"
                />
              </div>
              <div className="flex flex-row justify-around pt-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="ml-4 border-2 rounded"
                  placeholder="password"
                />
              </div>
              <div className="flex flex-row justify-around pt-6">
                <button
                  type="submit"
                  className="border-2 text-sm shadow-md rounded hover:bg-blue-400 hover:text-white border-blue-500 border-opacity-100 outline-none p-1"
                >
                  Sign me up!
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Signup);
