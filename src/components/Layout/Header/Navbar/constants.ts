import { Page } from '../../../../types';
import { TNavbarItem } from './types';

export const navbarItems: Array<TNavbarItem> = [
  { key: 'navbar.items.profile', href: Page.profile },
  {
    key: 'navbar.items.operations',
    href: Page.operations,
  },
];
