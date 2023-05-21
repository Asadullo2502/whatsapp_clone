import { create } from 'zustand';
import { ChatStoreType } from '../types';

const useChatStore = create<ChatStoreType>((set) => ({
  chatMessages: [],
  chats: [],
  refresh: false,
  loading: false,
  reset: () =>
    set({
      chatMessages: [],
      chats: [],
      refresh: false,
      loading: false,
    }),
}));

export default useChatStore;
