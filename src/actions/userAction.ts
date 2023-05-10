import { REGISTER_USER, LOGIN_USER } from "./types";
import { request } from "../utils/axios";

const USER_URL = "/user";

// export function signUpUser(dataToSubmit) {
//   const data = request("post", USER_URL + "/signUp", dataToSubmit);
//   return {
//     type: REGISTER_USER,
//     payload: data,
//   };
// }

// export function loginUser(dataToSubmit) {
//   const data = request("post", USER_URL + "/login", dataToSubmit);
//   return {
//     type: LOGIN_USER,
//     payload: data,
//   };
// }

export function signUpUser(dataToSubmit) {
  return request("post", USER_URL + "/signUp", dataToSubmit);

}

export function loginUser(dataToSubmit) {
  return request("post", USER_URL + "/login", dataToSubmit);
}