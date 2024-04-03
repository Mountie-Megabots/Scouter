'use client';

import NavLinks from './nav-links';
import ScoutingLogo from '../scouting-logo';
import { UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { SignOut } from '../../lib/data-handler';

export default function SideNav() {
  const pathname = window.location.pathname;
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <a
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-red-700 p-4 md:h-20"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <ScoutingLogo />
        </div>
      </a>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <a
          key={"Settings"}
          href={"/dashboard/settings"}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-red-100 text-red-600': pathname === "/dashboard/settings",
            },
          )}
        >
          <Cog6ToothIcon className="w-6" />
          <p className="hidden md:block">{"Settings"}</p>
        </a>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3"
            type='button'
            onClick={SignOut}>
            <UserCircleIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
