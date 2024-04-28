export function fetchApi(url, options) {
  const newURL = "/api" + url;
  const newHeaders = new Headers({
    "content-type": "application/json",
  });
  return fetch(newURL, { ...options, headers: newHeaders });
}
