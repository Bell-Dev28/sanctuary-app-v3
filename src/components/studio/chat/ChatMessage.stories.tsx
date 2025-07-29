import React from 'react';
import ChatMessage from './ChatMessage';

export default {
  title: 'studio/chat/ChatMessage',
  component: ChatMessage,
};

export const Default = () => <ChatMessage role={''} content={''} />;
