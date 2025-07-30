import { Toaster } from 'sonner';
import { toast } from 'sonner';

const meta = {
  title: 'UI/Toast',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;

export const ShowSuccess = {
  render: () => (
    <>
      <button onClick={() => toast.success('Journal shared successfully')}>
        Trigger Toast
      </button>
      <Toaster />
    </>
  ),
};