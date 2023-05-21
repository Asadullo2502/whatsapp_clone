import './AuthLayout.scss';
import { Link } from 'react-router-dom';
import { Logo } from 'src/assets/icons';
import Views from 'src/modules';

const AuthLayout = () => {
  return (
    <div className="authLayout">
      <div className="container">
        <div className="authLayout__header">
          <Link to={`/`}>
            <Logo /> WhatsApp Web
          </Link>
        </div>
        <div className="authLayout__body">
          <Views />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
