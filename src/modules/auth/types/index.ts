import { StateCreator, StoreApi, UseBoundStore } from 'zustand';
import { PersistOptions } from 'zustand/middleware';

export interface IUser {
  id: string | number;
  token: string | number;
  signedIn?: boolean;
}

export type AuthStoreType = {
  session: IUser;
  onSignInSuccess: (value: IUser) => void;
  onSignOutSuccess: () => void;
};

export type AuthPersistType = (
  config: StateCreator<AuthStoreType>,
  options: PersistOptions<AuthStoreType>
) => StateCreator<AuthStoreType>;

export interface IAuth {
  store: UseBoundStore<StoreApi<AuthStoreType>>;
  signIn: (values: React.FormEvent<HTMLFormElement>) => void;
  authenticated: boolean;
}
