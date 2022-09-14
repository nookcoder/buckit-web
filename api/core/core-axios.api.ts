import axios from 'axios';
export const coreGet = (url: string, headers?: any, cb?: any) => {
  return axios
    .get(`https://hyeonbuckit.buckit.me${url}`, {
      method: 'GET',
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
  return axios
    .post(`https://hyeonbuckit.buckit.me${url}`, {
      method: 'POST',
      body: body,
      headers: headers,
    })
    .then((res) => {
      cb(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
