//@ts-nocheck
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
// import { cairo_play } from '@/app/ui/fonts';
import { FetchUpcomingMatches } from '../../lib/data-handler';

function fetchData() {
  let status = 'pending';
  let result: any;

  const promise = FetchUpcomingMatches()
    .then(data => data)
    .then(r => {
      status = 'success';
      result = r;
    })
    .catch(e => {
      status = 'error';
      result = e;
    });

  return {
    read() {
      if (status === 'pending') {
        throw promise;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}

const dataWrapper = fetchData();

export default function UpcomingMatches() {
  const matches = dataWrapper.read()

  return (
    <div className="flex w-full flex-col md:col-span-4">
      {/* <h2 className={`${cairo_play.className} mb-4 text-xl md:text-2xl`}> */}
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Upcoming Matches
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

        <div className="bg-white px-6">
          {matches.map((match, i) => {
            return (
              <div
                key={match.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0 mr-4">
                    <p className="truncate text-xl font-semibold md:text-base">
                      {"Q " + match.matchNum}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="grid grid-cols-3 gap-2 mr-4">
                    <img
                      src={match.red1Avatar}
                      alt={`${match.red1}'s profile picture`}
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                    <img
                      src={match.red2Avatar}
                      alt={`${match.red2}'s profile picture`}
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                    <img
                      src={match.red3Avatar}
                      alt={`${match.red3}'s profile picture`}
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                    <td className="whitespace-nowrap text-red-600">
                      <a href={"teams/view?" + match.red1} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                        {match.red1}
                      </a>
                      <a href={"teams/view?" + match.red2} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                        {match.red2}
                      </a>
                      <a href={"teams/view?" + match.red3} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                        {match.red3}
                      </a>
                    </td>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mr-4">
                    <img
                      src={match.blue1Avatar}
                      alt={`${match.blue1}'s profile picture`}
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                    <img
                      src={match.blue2Avatar}
                      alt={`${match.blue2}'s profile picture`}
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                    <img
                      src={match.blue3Avatar}
                      alt={`${match.blue3}'s profile picture`}
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                    <td className="whitespace-nowrap text-blue-600">
                    <a href={"teams/view?" + match.blue1} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                      {match.blue1}
                    </a>
                    <a href={"teams/view?" + match.blue2} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                      {match.blue2}
                    </a>
                    <a href={"teams/view?" + match.blue3} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                      {match.blue3}
                    </a>
                  </td>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <InformationCircleIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Shows the next 5 upcoming matches</h3>
        </div>
      </div>
    </div>
  );
}
