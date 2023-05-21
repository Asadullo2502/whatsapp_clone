import axios, { AxiosRequestConfig } from 'axios';
import useAuthStore from 'src/modules/auth/store';
import { IServices } from 'src/types';
export const baseURL = process.env.REACT_APP_API_URL;

export class Services implements IServices {
  api = axios.create({
    baseURL: baseURL,
  });
  authStore = useAuthStore;

  constructor() {
    this.api.interceptors.request.use(function (config: any) {
      config.headers = {};
      return config;
    });

    this.api.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        this.errorHandle(error);
      }
    );
  }

  private errorHandle(error: { response: { status: number }; code: string }) {
    if (error.response?.status === 401 || error.code === 'ERR_NETWORK') {
      this.authStore.getState()?.onSignOutSuccess();
    }
  }

  public fetch(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, 'url' | 'method'>
  ) {
    return this.api({
      ...options,
      url: endpoint,
      method: 'GET',
    });
  }

  public post(
    endpoint: string,
    data: AxiosRequestConfig['data'],
    options?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
  ) {
    return this.api({
      ...options,
      url: endpoint,
      method: 'POST',
      data,
    });
  }

  public put(
    endpoint: string,
    data: AxiosRequestConfig['data'],
    options?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
  ) {
    return this.api({
      ...options,
      url: endpoint,
      method: 'PUT',
      data,
    });
  }

  public patch(
    endpoint: string,
    data: AxiosRequestConfig['data'],
    options?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
  ) {
    return this.api({
      ...options,
      url: endpoint,
      method: 'PATCH',
      data,
    });
  }

  public delete(
    endpoint: string,
    options?: Omit<AxiosRequestConfig, 'url' | 'method'>
  ) {
    return this.api({
      ...options,
      url: endpoint,
      method: 'DELETE',
    });
  }
}
