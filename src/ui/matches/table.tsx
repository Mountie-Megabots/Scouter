//@ts-nocheck
'use client';

import { EditComp, DeleteMatch, ViewMatchButton } from './buttons';
import ScoutDataUploadStatus from './scoutdata-upload-status';
import { formatDateToLocal, formatCurrency } from '../../lib/utils';
import { fetchMatches } from '../../lib/data-handler';
import MatchStatus from './match-status';

function fetchData() {
  let status = 'pending';
  let result: any;

  const promise = fetchMatches()
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

export default function MatchesTable() {
  const macthes = dataWrapper.read()

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {macthes?.map((match) => (
              <tr
              key={match.id}
              className="w-full border-b py-3 text-sm bg-white last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center">
                  <p>{"Q " + match.matchNum}</p>
                </div>
              </td>
              <td className=" text-red-600 px-3 py-3">
                <a href={"teams/" + match.red1} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                  {match.red1}
                </a>
                <a href={"teams/" + match.red2} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                  {match.red2}
                </a>
                <a href={"teams/" + match.red3} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                  {match.red3}
                </a>
              </td>
              <td className=" text-blue-600 px-3 py-3">
                <a href={"teams/" + match.blue1} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                  {match.blue1}
                </a>
                <a href={"teams/" + match.blue2} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                  {match.blue2}
                </a>
                <a href={"teams/" + match.blue3} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                  {match.blue3}
                </a>
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                <MatchStatus status={match.matchStatus} />
              </td>
              {/* <td className="whitespace-nowrap px-3 py-3">
                <ScoutDataUploadStatus status={match.uploadStatus} />
              </td> */}
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                  <ViewMatchButton matchNum={match.matchNum} />
                  {/* <DeleteMatch id={match.id} /> */}
                </div>
              </td>
            </tr>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Match Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Red Alliance
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Blue Alliance
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Upload Status
                </th> */}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {macthes?.map((match) => (
                <tr
                  key={match.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center">
                      <p>{"Q " + match.matchNum}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-red-600 px-3 py-3">
                    <a href={"teams/" + match.red1} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                      {match.red1}
                    </a>
                    <a href={"teams/" + match.red2} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                      {match.red2}
                    </a>
                    <a href={"teams/" + match.red3} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-red-600'>
                      {match.red3}
                    </a>
                  </td>
                  <td className="whitespace-nowrap text-blue-600 px-3 py-3">
                    <a href={"teams/" + match.blue1} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                      {match.blue1}
                    </a>
                    <a href={"teams/" + match.blue2} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                      {match.blue2}
                    </a>
                    <a href={"teams/" + match.blue3} className='inline-flex items-center rounded-full px-2 py-1 bg-gray-100 text-blue-600'>
                      {match.blue3}
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <MatchStatus status={match.matchStatus} />
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    <ScoutDataUploadStatus status={match.uploadStatus} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewMatchButton matchNum={match.matchNum} />
                      {/* <DeleteMatch id={match.id} /> */}
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
