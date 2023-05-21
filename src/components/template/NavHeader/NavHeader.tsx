import { useState } from 'react';
import { Logout, MessageIcon, UserIcon } from 'src/assets/icons';
import useAuthStore from 'src/modules/auth/store';
import useChatStore from 'src/modules/chat/store';
import NavCreateChat from '../NavCreateChat';
import './NavHeader.scss';

const NavHeader = () => {
  const [create, setCreate] = useState(false);
  const { onSignOutSuccess } = useAuthStore();
  const { reset } = useChatStore();
  return (
    <>
      <div className="nav__header">
        <span className="header__user--image">
          <UserIcon />
        </span>

        <div>
          <span
            className="header__create--message"
            onClick={() => setCreate(true)}
          >
            <MessageIcon />
          </span>
          <span
            className="header__create--message"
            onClick={() => {
              reset();
              onSignOutSuccess();
            }}
          >
            <Logout />
          </span>
        </div>
      </div>

      <NavCreateChat setCreate={setCreate} create={create} />
    </>
  );
};

export default NavHeader;
