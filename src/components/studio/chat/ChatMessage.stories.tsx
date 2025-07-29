import ChatMessage from './ChatMessage';

export default {
  title: 'Studio/ChatMessage',
  component: ChatMessage,
};

export const FromUser = {
  args: {
    role: 'user',
    content: 'Hi there, how can I help you today?',
  },
};

export const FromAI = {
  args: {
    role: 'assistant',
    content: 'Sure! Here’s how I can assist...',
  },
};
