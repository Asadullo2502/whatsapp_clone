import { Main } from 'src/model';
import useChatStore from '../store';

export class Chat extends Main {
  store = useChatStore;

  public async getChats() {
    const { id, token } = this.authStore.getState()?.session;
    const { setState } = this.store;
    try {
      this.services
        .fetch(`/waInstance${id}/GetChats/${token}`)
        .then((response) => {
          const data = response?.data;
          if (data?.length) {
            setState({ chats: data });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  public async getChat(chatId: string) {
    const { id, token } = this.authStore.getState()?.session;
    const { setState } = this.store;
    try {
      this.services
        .post(`/waInstance${id}/GetChatHistory/${token}`, {
          chatId,
        })
        .then((response) => {
          const data = response?.data;
          if (Array.isArray(data) || data?.length) {
            setState({ chatMessages: data.reverse() });
            setState({ loading: false });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  public async sendMessage(phone: string, message: string) {
    const { id, token } = this.authStore.getState()?.session;
    const { getState, setState } = this.store;
    try {
      setState({ loading: true });
      this.services
        .post(`/waInstance${id}/SendMessage/${token}`, {
          chatId: phone,
          message: message,
        })
        .then((res) => {
          const { idMessage } = res?.data;
          if (idMessage) {
            setTimeout(() => {
              setState({ refresh: !getState()?.refresh });
            }, 1500);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  public nameOrNumber(id: string) {
    return id?.split('@')?.at(0);
  }
}
const chat = new Chat();
export default chat;
