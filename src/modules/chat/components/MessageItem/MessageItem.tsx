import dayjs from 'dayjs';
import { MessageItemType } from '../../types';
import './MessageItem.scss';

const MessageItem: React.FC<MessageItemType> = ({ info }) => {
  return (
    <div className={`messageItem ${info?.type === 'incoming' ? '' : 'my'}`}>
      <p>
        {info?.textMessage}
        <span>00:00</span>
        <span className="messageItem__time">
          {dayjs.unix(info?.timestamp).format('HH:mm')}
        </span>
      </p>
    </div>
  );
};

export default MessageItem;
