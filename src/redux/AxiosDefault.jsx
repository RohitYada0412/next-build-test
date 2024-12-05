import axios from "axios";
import { isEmpty } from "lodash";

import { toast } from "react-toastify";
// import { getSession } from "./services";

const AxiosDefault = async ({ method, data, url, contentType, ...rest }) => {
  
  const AxiosDefault = axios.create({
    baseURL: 'https://mmfinfotech.website/elearning/api/',
    headers: {
      "Content-Type": isEmpty(contentType) ? "application/json" : contentType,
      Accept: "application/json",
      ...rest,
    },
  });

  AxiosDefault.interceptors.request.use(
    async function (config) {
      try {
        const { Authorization } = `getSession()`;
        config.headers.authorization = `Bearer ${Authorization}`;
      } catch (err) {
        toast.error("something went wrong.");
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  AxiosDefault.interceptors.response.use(
    function (response) {      
      return response;
    },
    async function (error) {
      if (error.response.status === 401) {
        try {
          localStorage.clear();
          toast.error("You are unauthorized user");
          // window.location.replace(baseName);
          // window.location = baseName;
        } catch (e) {
          return e;
        }
      }
      return Promise.reject(error);
    }
  );
  return await AxiosDefault({
    method,
    data,
    url,
    contentType,
  });
};

export default AxiosDefault;
