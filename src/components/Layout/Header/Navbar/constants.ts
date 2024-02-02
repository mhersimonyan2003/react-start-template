import { Page } from '@/types';
import { TNavbarItem } from './types';

export const navbarItems: Array<TNavbarItem> = [
  { key: 'navbar.items.profile', href: Page.profile, withAuth: true },
  {
    key: 'navbar.items.operations',
    href: Page.operations,
    withAuth: false,
  },
];
