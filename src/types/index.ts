import { AxiosInstance } from 'axios';
import { AuthStoreType } from 'src/modules/auth/types';
import { IChats } from 'src/modules/chat/types';
import { Services } from 'src/services';
import { StoreApi, UseBoundStore } from 'zustand';

export interface IMain {
  services: Services;
  authStore: UseBoundStore<StoreApi<AuthStoreType>>;
  getFormValues: (event: React.FormEvent<HTMLFormElement>) => {
    [key: string]: string;
  };
}

export interface IServices {
  api: AxiosInstance;
  authStore: UseBoundStore<StoreApi<AuthStoreType>>;
}


export type NavCreateChatType = {
  setCreate: (value: boolean) => void;
  create: boolean;
};

export type ChatItemType = {
  info: IChats;
};
