import request from "./request";

export function getRecommend() {
  return request({
    url: "api/poetry/rec",
    method: "get"
  });
}

export function search(searchBody: SearchBody) {
  return request({
    url: "api/poetry/search",
    method: "post",
    data: searchBody
  });
}
