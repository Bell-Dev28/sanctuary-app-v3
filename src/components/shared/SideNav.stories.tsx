import SideNav from './SideNav';

const meta = {
  title: 'Shared/SideNav',
  component: SideNav,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    activeSection: 'home',
  },
};

export const Collapsed = {
  args: {
    activeSection: 'journal',
    collapsed: true,
  },
};

export const MobileView = {
  args: {
    activeSection: 'studio',
    isMobile: true,
  },
};