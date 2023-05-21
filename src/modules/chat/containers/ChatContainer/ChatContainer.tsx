import './ChatContainer.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import SendMessage from '../SendMessage/SendMessage';
import {  useEffect, useRef } from 'react';
import useChatStore from '../../store';
import { ChatContainerType } from '../../types';

const ChatContainer: React.FC<ChatContainerType> = ({ children }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { chatMessages } = useChatStore();

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="chatContainer">
      <div className="chatContainer__header">
        <ChatHeader />
      </div>
      <div className="chatContainer__content" ref={chatContainerRef}>
        {children}
      </div>
      <div className="chatContainer__footer">
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatContainer;
