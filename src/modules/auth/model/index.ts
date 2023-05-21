import { Main } from 'src/model';
import useAuthStore from '../store';
import { IAuth } from '../types';

export class Auth extends Main implements IAuth {
  store = useAuthStore;
  constructor() {
    super();
    this.signIn = this.signIn.bind(this);
  }

  public signIn(event: React.FormEvent<HTMLFormElement>) {
    const values = this.getFormValues(event);
    this.store.getState().onSignInSuccess({
      id: values?.id,
      token: values?.token,
    });
  }
  
  get authenticated() {
    const { token, signedIn } = this.store.getState().session;
    return Boolean(token && signedIn);
  }
}
const auth = new Auth();
export default auth;
