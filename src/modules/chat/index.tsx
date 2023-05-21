import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageItem from './components/MessageItem/MessageItem';
import ChatContainer from './containers/ChatContainer/ChatContainer';
import Chat from './model';
import useChatStore from './store';
import './styles/main.scss';

const Chats = () => {
  const params = useParams();
  const { chatMessages, refresh } = useChatStore();

  useEffect(() => {
    Chat.getChat(String(params?.id));
  }, [params, refresh]);

  useEffect(() => {
    const interval = setInterval(() => {
      Chat.getChat(String(params?.id));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [params?.id]);

  return (
    <div className="chat">
      <ChatContainer>
        {chatMessages?.length ? (
          chatMessages?.map((elem, index) => <MessageItem info={elem} key={index} />)
        ) : (
          <div className="chat__nomessage">
            <p className="nomessage__text">There is not message</p>
          </div>
        )}
      </ChatContainer>
    </div>
  );
};

export default Chats;
