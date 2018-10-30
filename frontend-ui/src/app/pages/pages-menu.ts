import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Clients',
    icon: 'nb-person',
    link: '/pages/clients',
  },
  {
    title: 'Contracts',
    icon: 'nb-compose',
    link: '/pages/contracts',
  },
];
