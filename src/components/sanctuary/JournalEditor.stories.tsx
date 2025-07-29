import React from 'react';
import JournalEditor from './JournalEditor';

export default {
  title: 'sanctuary/JournalEditor',
  component: JournalEditor,
};

export const Default = () => <JournalEditor journalId={''} userId={''} />;
