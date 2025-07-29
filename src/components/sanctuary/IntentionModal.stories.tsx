import IntentionModal from './IntentionModal';

export default {
  title: 'Sanctuary/IntentionModal',
  component: IntentionModal,
};

export const Open = {
  args: {
    isOpen: true,
    onClose: () => alert('Closed modal'),
  },
};
