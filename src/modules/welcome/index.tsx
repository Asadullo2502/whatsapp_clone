import { WelComeIcon } from 'src/assets/icons';
import "./styles/main.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <span className="icon">
        <WelComeIcon />
      </span>
      <h2>WhatsApp Web</h2>
      <p>
        Send and receive messages without keeping your phone online.
        <br />
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </p>
    </div>
  );
};

export default Welcome;
