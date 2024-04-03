//@ts-nocheck
'use client';

import { DeleteMatch, ViewTeamButton } from '../matches/buttons';
import ScoutDataUploadStatus from './scoutdata-upload-status';
import { formatDateToLocal, formatCurrency } from '../../lib/utils';
import { fetchMatches, fetchTeams } from '../../lib/data-handler';
import MatchStatus from './match-status';
import PitScoutUploadStatus from './pitscout-upload-status';

function fetchData() {
  let status = 'pending';
  let result: any;

  const promise = fetchTeams()
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

export default function TeamsTable() {

  const teams = dataWrapper.read()

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {teams?.map((team) => (
              <tr
              key={team.teamNum}
              className="w-full border-b bg-white py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center">
                  <p>{team.teamNum}</p>
                </div>
              </td>
              <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={team.image_url}
                            className="rounded-full"
                            alt={`${team.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{team.name}</p>
                        </div>
            </td>
              <td className="whitespace-nowrap px-3 py-3">
              <PitScoutUploadStatus status={team.pitscout} />
              </td>
              {/* <td className="whitespace-nowrap px-3 py-3">
                <ScoutDataUploadStatus status={match.uploadStatus} />
              </td> */}
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                  {/* <ViewMatchButton matchNum={team.matchNum} /> */}
                  {/* <DeleteMatch id={match.id} /> */}
                  <ViewTeamButton teamNum={team.teamNum.toString()} />
                </div>
              </td>
            </tr>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {/* <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Rank
                    </th> */}
                    <th scope="col" className="px-3 py-5 font-medium">
                      Team #
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Team Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Pit Scouting
                    </th>
                    {/* <th scope="col" className="px-3 py-5 font-medium">
                      Avg Notes Scored
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Avg Climb %
                    </th> */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {teams?.map((team) => (
                <tr
                key={team.teamNum}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center">
                    <p>{team.teamNum}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={team.image_url}
                            className="rounded-full"
                            alt={`${team.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{team.name}</p>
                        </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                <PitScoutUploadStatus status={team.pitscout} />
                </td>
                {/* <td className="whitespace-nowrap px-3 py-3">
                  <ScoutDataUploadStatus status={match.uploadStatus} />
                </td> */}
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    {/* <ViewMatchButton matchNum={team.matchNum} /> */}
                    {/* <DeleteMatch id={match.id} /> */}
                    <ViewTeamButton teamNum={team.teamNum.toString()} />
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
