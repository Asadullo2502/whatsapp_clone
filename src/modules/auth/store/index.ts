import { AuthPersistType, AuthStoreType } from '../types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
  token: '',
  id: '',
  signedIn: false,
};

const useAuthStore = create<AuthStoreType>(
  (persist as AuthPersistType)(
    (set) => ({
      session: initialState,
      onSignInSuccess: (session) =>
        set(() => ({
          session: {
            ...session,
            signedIn: true,
          },
        })),
      onSignOutSuccess: () =>
        set(() => ({
          session: initialState,
        })),
    }),
    {
      name: 'auth',
    }
  )
);

export default useAuthStore;
