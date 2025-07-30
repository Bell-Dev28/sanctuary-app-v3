import IntentionModal from './IntentionModal';

const meta = {
  title: 'Sanctuary/IntentionModal',
  component: IntentionModal,
  tags: ['autodocs'],
};

export default meta;

export const OpenModal = {
  args: {
    isOpen: true,
    onClose: () => alert('Modal closed'),
    onExplore: () => alert('Explore with AI clicked'),
    onView: () => alert('View journal clicked'),
    intention: 'I want to better understand my partners needs.',
  },
};