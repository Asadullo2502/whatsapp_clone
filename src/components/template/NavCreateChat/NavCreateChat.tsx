import { useNavigate } from 'react-router-dom';
import { BackArrow } from 'src/assets/icons';
import { Button, Input } from 'src/components/ui';
import Chat from 'src/modules/chat/model';
import { NavCreateChatType } from 'src/types';
import './NavCreateChat.scss';

const NavCreateChat: React.FC<NavCreateChatType> = ({ setCreate, create }) => {
  const navigate = useNavigate();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = Chat.getFormValues(e);
    navigate(`/chat/${data?.phone}@c.us`);
    setCreate(false);
    const form = e.target as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  return (
    <div className={`navCreateChat ${create ? 'show' : ''}`}>
      <div className="navCreateChat__top">
        <span onClick={() => setCreate(false)}>
          <BackArrow />
        </span>
        <h3>Create New Chat</h3>
      </div>

      <form className="navCreateChat__form" onSubmit={submit}>
        <Input type="tel" placeholder="Phone number" name="phone" />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default NavCreateChat;
