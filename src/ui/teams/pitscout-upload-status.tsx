//@ts-nocheck
import { CheckIcon, ClockIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function PitScoutUploadStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'uploaded',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          <a className="hidden lg:block">Needs Completing</a>
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'uploaded' ? (
        <>
          <a className="hidden lg:block">Completed</a>
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
