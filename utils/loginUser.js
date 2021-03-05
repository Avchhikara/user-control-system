const Cookies = require("js-cookie");

export function isLoggedIn() {
  return Cookies.get("userId") !== undefined;
}

export function loginUser(userId, name, email) {
  Cookies.set("userId", userId);
  Cookies.set("name", name);
  Cookies.set("email", email);
}

export function getUserDetails() {
  return {
    email: Cookies.get("email"),
    name: Cookies.get("name"),
    userId: Cookies.get("userId"),
  };
}

export function logOutUser() {
  Cookies.remove("userId");
}
