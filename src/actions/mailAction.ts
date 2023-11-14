import { request } from "../utils/axios";
import { MAIL_URL } from "../common/commonConstants";
import { UserType, TemporaryNumberCheckType } from "src/common/commonTypes";

/**
 * @param {string} email 
 * @param {"01":회원가입 | "02": 비밀번호 찾기} type 
 */
export function mailAuthenticate(email: string, type: "01" | "02") {
    return request('get', `${MAIL_URL}/${email}/authenticate?type=${type}`, undefined);
}

export function temporaryNumberCheck(data:TemporaryNumberCheckType) {
    return request("post", `${MAIL_URL}/temporaryNumberCheck`, data);
}

export function updateUserByEmail(data:UserType) {
    return request("post", `${MAIL_URL}/user/update`, data);
}