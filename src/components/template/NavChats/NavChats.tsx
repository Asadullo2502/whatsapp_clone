import { useEffect } from 'react';
import { ChatItem } from 'src/components/ui';
import Chat from 'src/modules/chat/model';
import useChatStore from 'src/modules/chat/store';
import './NavChats.scss';

const NavChats = () => {
  const { chats, refresh } = useChatStore();
  useEffect(() => {
    Chat.getChats();
  }, [refresh]);
  return (
    <div className="nav__chats">
      {chats?.map((elem, index) => (
        <ChatItem info={elem} key={index} />
      ))}
    </div>
  );
};

export default NavChats;
