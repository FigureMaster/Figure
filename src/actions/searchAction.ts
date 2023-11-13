import { request } from '../utils/axios';
import { SEARCH_URL, USER_URL } from '../components/common/CommonConstants';

export function integratedSearch(token: string, keyword: string) {
    return request('get', SEARCH_URL + '?token=' + token + '&searchKeyword=' + keyword, undefined);
}

export function userSearch(token: string, userId: number) {
    return request('get', SEARCH_URL + USER_URL + '/' + userId + '?token=' + token, undefined);
}
