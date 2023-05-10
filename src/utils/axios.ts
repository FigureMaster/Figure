import axios from "axios";

const DOMAIN = "http://localhost:8080"; //proxy 설정 시 앞에 백엔드 도메인은 작성 X
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN+url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};