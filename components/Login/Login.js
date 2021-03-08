import React, { Component } from "react";

import { withRouter } from "next/router";

import Header from "./../Header";
import Footer from "./../Footer";
import { loginUser } from "./../../utils/loginUser";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onLogin = async (e) => {
    e.preventDefault();
    const loginRequest = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify({
        email: e.target.querySelector("input[id='email']").value,
        password: e.target.querySelector("input[id='password']").value,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await loginRequest.json();
    if (data.userId) {
      loginUser(data.userId, data.name, data.email);
    }
    this.props.router.push("/dashboard");
  };

  render() {
    return (
      <>
        <Header />
        <div className="flex justify-center mt-10 font-mono">
          <div className="max-w-lg border-4 p-4">
            <div className="flex flex-col justify-items-center text-center pb-6">
              <div className="text-xl">Welcome back {":)"}</div>
              <div className="text-sm muted">Login form</div>
            </div>
            <form method="post" onSubmit={this.onLogin}>
              <div className="flex flex-row justify-around">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="ml-10 border-2 rounded"
                />
              </div>
              <div className="flex flex-row justify-around pt-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="ml-4 border-2 rounded"
                />
              </div>
              <div className="flex flex-row justify-around pt-6">
                <button
                  type="submit"
                  className="hover border-2 hover:bg-blue-400 hover:text-white rounded border-blue-500 border-opacity-100 outline-none p-0.5 pl-2 pr-2"
                >
                  Login me in!
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

export default withRouter(Login);
