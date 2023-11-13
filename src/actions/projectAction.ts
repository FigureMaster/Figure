import { request } from '../utils/axios';
import { PROJECT_URL } from '../components/common/CommonConstants';

export function createProject(dataToSubmit) {
    return request('post', PROJECT_URL + '/create', dataToSubmit);
}

export function getAllProjects() {
    return request('get', PROJECT_URL + '/all', null);
}

export function getUserProjects(userId: number) {
    return request('get', PROJECT_URL + '/list?userId=' + userId, null);
}

export function saveBookmark(data) {
    return request('post', PROJECT_URL + '/bookmark', data);
}

export function getProjectUsers(data) {
    return request('post', PROJECT_URL + '/users', data);
}
