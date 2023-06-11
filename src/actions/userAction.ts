import { REGISTER_USER, LOGIN_USER } from './types';
import { request } from '../utils/axios';

const USER_URL = '/user';
const PROJECT_URL = '/projects';
const NOTICE_URL = '/notices';

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
    return request('post', USER_URL + '/signUp', dataToSubmit);
}

export function loginUser(dataToSubmit) {
    return request('post', USER_URL + '/login', dataToSubmit);
}

export function getUserProjects(userId: number) {
    return request('get', `${USER_URL}/${userId.toString()}${PROJECT_URL}`, undefined);
}

export function getUserNotices(userId: number) {
    return request('get', `${USER_URL}/${userId}${NOTICE_URL}`, '');
}
