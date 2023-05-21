import { useParams } from 'react-router-dom';
import { UserIcon } from 'src/assets/icons';
import './ChatHeader.scss';

const ChatHeader = () => {
  const params = useParams();
  return (
    <div className="chatHeader">
      <div className="chatHeader__info">
        <span className="info__user--image">
          <UserIcon />
        </span>
        <span className="info__username">
          {params?.id?.split('@')?.at(0) || 'User'}
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
