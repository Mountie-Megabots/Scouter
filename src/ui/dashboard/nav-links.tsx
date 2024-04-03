//@ts-nocheck
'use client';

import {
  UserGroupIcon,
  RectangleGroupIcon,
  DocumentDuplicateIcon,
  QueueListIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: RectangleGroupIcon },
  {
    name: 'Matches',
    href: '/dashboard/matches',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Teams', href: '/dashboard/teams', icon: UserGroupIcon },
  // { name: 'Picklist', href: '/dashboard/picklist', icon: QueueListIcon },
];

export default function NavLinks() {
  const pathname = window.location.pathname;
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-red-100 text-red-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
