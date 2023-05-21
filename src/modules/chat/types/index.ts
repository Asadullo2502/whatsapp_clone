import { HTMLProps } from "react";

export interface IChats {
  archive: boolean;
  ephemeralExpiration: number;
  ephemeralSettingTimestamp: number;
  id: string;
  notSpam: boolean;
  name?: string;
}

export interface IChatMessages {
  chatId: string;
  idMessage: string;
  sendByApi: boolean;
  statusMessage: string;
  textMessage: string;
  timestamp: number;
  type: 'outgoing' | 'incoming';
  typeMessage: string;
}

export type ChatStoreType = {
  chats: IChats[];
  chatMessages: IChatMessages[];
  refresh: boolean;
  loading: boolean;
  reset: () => void;
};

export type MessageItemType = {
  info: IChatMessages;
};

export type ChatContainerType = Pick<HTMLProps<HTMLElement>, 'children'>;
