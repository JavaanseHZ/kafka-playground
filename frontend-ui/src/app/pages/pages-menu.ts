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
    icon: 'nb-tables',
    children: [
      {
        title: 'Client Table',
        link: '/pages/clients/client-table',
      },
    ],
  },
];
