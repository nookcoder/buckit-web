import axios from 'axios';

// TODO : logger 작업
export const appAxios = axios.create();
appAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem(
      `${process.env.REFRESH_COOKIE_KEY}`
    );
    return await coreGet('/api/v1/auth/refresh', {
      Authorization: `Bearer ${refreshToken}`,
    })
      .then((res) => {
        appAxios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${res.data.access_token}`;
        return appAxios(originalRequest);
      })
      .catch((err) => {
        localStorage.clear();
        return Promise.reject(err);
      });
  }
);

export const coreGet = (url: string, headers?: any, cb?: any) => {
  return appAxios
    .get(`${process.env.BASE_URL}${url}`, {
      headers: headers,
    })
    .then((res) => {
      if (cb) {
        return cb(res);
      }

      return res;
    })
    .catch((err) => {});
};

export const corePost = (url: string, body: any, headers?: any, cb?: any) => {
  return appAxios.post(`${process.env.BASE_URL}${url}`, body, {
    headers: headers,
  });
};

export const coreGetWithAuth = (url: string, headers?: any, cb?: any) => {
  return appAxios
    .get(`${process.env.BASE_URL}${url}`, {
      headers: headers,
    })
    .then((res) => {
      if (cb) {
        return cb(res);
      }

      return res;
    })
    .catch((err) => {});
};
