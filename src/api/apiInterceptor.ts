export const onRequest = (config: any) => {
  // we could a token here if we wanted
  return config;
};

export const onResponseSuccess = (response: any) => {
  return response;
};

export const onResponseError = (err: any) => {
  return Promise.reject(err);
};

export const setupInterceptors = (API: any) => {
  API.interceptors.request.use(onRequest);
  API.interceptors.response.use(onResponseSuccess, onResponseError);
};
