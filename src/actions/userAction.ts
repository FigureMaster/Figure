import { request } from '../utils/axios';
import { USER_URL, PROJECT_URL, NOTICE_URL} from "../common/commonConstants";
import { UserType } from 'src/common/commonTypes';

export function signUpUser(data:UserType) {
    return request('post', USER_URL + '/signUp', data);
}

export function loginUser(data:UserType) {
    return request('post', USER_URL + '/login', data);
}

export function getUserProjects() {
    const token = sessionStorage.getItem('isAuthorized');
    return request('get', `${USER_URL}${PROJECT_URL}?token=${token}`, undefined);
}

export function getUserNotices(userId: number) {
    return request('get', `${USER_URL}/${userId}${NOTICE_URL}`, '');
}
