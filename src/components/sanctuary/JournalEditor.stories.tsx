import JournalEditor from './JournalEditor';

const story = {
  title: 'Sanctuary/JournalEditor',
  component: JournalEditor,
};

export default story;

export const Default = () => <JournalEditor journalId={''} userId={''} />;
