import './ChatItem.scss';
import { UserIcon } from 'src/assets/icons';
import { NavLink } from 'react-router-dom';
import Chat from 'src/modules/chat/model';
import { ChatItemType } from 'src/types';

const ChatItem: React.FC<ChatItemType> = ({ info }) => {
  return (
    <NavLink to={`/chat/${info?.id}`} className="chatItem">
      <span className="chatItem__user--image">
        <UserIcon />
      </span>
      <div className="chatItem__info">
        <div className="info__row">
          <b className="row__username">
            {info?.name || Chat.nameOrNumber(info?.id)}
          </b>
          <span className="row__date">Date</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ChatItem;
