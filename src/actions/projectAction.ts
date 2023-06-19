import { request } from "../utils/axios";

const PROJECT_URL = "/project";

// TODO : restful한 url로 변경하여 수정하기 !!!

export function getAllProjects() {
  return request("get", PROJECT_URL + "/all", null);
}

export function getUserProjects(userId: number) {
  return request("get", PROJECT_URL + "/list?userId=" + userId, null);
}

export function saveBookmark(data) {
  return request("post", PROJECT_URL + "/bookmark", data);
}

export function getProjectUsers(data) {
  return request("post", PROJECT_URL + "/users", data);
}