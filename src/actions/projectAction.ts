import { request } from "../utils/axios";

const PROJECT_URL = "/project";

export function createProject(dataToSubmit) {
  return request("post", PROJECT_URL + "/create", dataToSubmit);
}
