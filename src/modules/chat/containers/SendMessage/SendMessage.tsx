import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SendIcon } from 'src/assets/icons';
import Chat from '../../model';
import useChatStore from '../../store';
import './SendMessage.scss';

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const params = useParams();
  const { loading } = useChatStore();
  const submit = () => {
    Chat.sendMessage(String(params?.id), String(message));
    setMessage('');
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey && message) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <form
      className="sendMessage"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <textarea
        placeholder="Type a message"
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setMessage(e?.target?.value);
        }}
        value={message}
        rows={1}
      ></textarea>
      <button type="submit" disabled={!Boolean(message)}>
        {loading ? <div className="lds-dual-ring"></div> : <SendIcon />}
      </button>
    </form>
  );
};
export default SendMessage;
