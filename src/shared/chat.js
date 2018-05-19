import ApiRequest from './ApiRequest';
import { APIKEY, CHATBOTID, EXTERNALID } from './constant';

export const sendMessage = message => {
  return ApiRequest
    .get(
      `?apiKey=${APIKEY}&message=${message}&chatBotID=${CHATBOTID}&externalID=${EXTERNALID}`
    ).catch(error => {
      console.error('error', error);
    });
}

export const getSavedChatMessages = () => {
  const messagesString = localStorage.getItem('botMessages') || '[]';
  const messages = JSON.parse(messagesString);
  return messages;
}

export const saveChatMessages = (messages) => {
  const messageString = JSON.stringify(messages);
  localStorage.setItem('botMessages', messageString);
}