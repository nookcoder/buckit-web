import axios from 'axios';

const authInstanceAxios = axios.create();
authInstanceAxios.interceptors.response.use(
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
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${res.data.access_token}`;
        return axios(originalRequest);
      })
      .catch((err) => {
        localStorage.clear();
        return Promise.reject(err);
      });
  }
);

export const coreGet = (url: string, headers?: any, cb?: any) => {
  return axios
    .get(`https://hyeonbuckit.buckit.me${url}`, {
      headers: headers,
    })
    .then((res) => {
      if (cb) {
        return cb(res);
      }

      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const corePost = (url: string, body: any, headers?: any, cb?: any) => {
  return axios.post(`https://hyeonbuckit.buckit.me${url}`, body, {
    headers: headers,
  });
};

export const coreGetWithAuth = (url: string, headers?: any, cb?: any) => {
  return authInstanceAxios
    .get(`https://hyeonbuckit.buckit.me${url}`, {
      headers: headers,
    })
    .then((res) => {
      if (cb) {
        return cb(res);
      }

      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
