import './SignInForm.scss';
import { Button, Input } from 'src/components/ui';
import Auth from '../../model';

const SignInForm = () => {
  return (
    <form className="signInForm" onSubmit={Auth.signIn}>
      <h2>Login</h2>
      <Input type="number" name="id" required placeholder="IdInstance" />
      <Input type="text" name="token" required placeholder="ApiTokenInstance" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default SignInForm;
