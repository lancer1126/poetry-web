import request from "./request";

export function getRecommend() {
  return request({
    url: "api/poetry/rec",
    method: "get"
  });
}
