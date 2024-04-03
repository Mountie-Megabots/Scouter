//@ts-nocheck
'use client';
import { ChevronDownIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { fetchComps, getCurrentComp } from '../lib/data-handler';

function fetchData() {
  let status = 'pending';
  let result: any;

  const promise = fetchComps()
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

export default function CompDropdown({ compID }: { compID: string }) {

    // const comps = [
    //     {
    //         id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    //         name: 'Jackson',
    //         email: 'lee@robinson.com',
    //         image_url: '/customers/lee-robinson.png',
    //     },
    //     {
    //     id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    //     name: 'Lake View',
    //     email: 'lee@robinson.com',
    //     image_url: '/customers/lee-robinson.png',
    //   }]

    const comps = dataWrapper.read();
    
    return (
          <div className="relative">
            <select
              id="compdropdown"
              name="compdrop"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue= {getCurrentComp()}
              onChange= {(e) =>{
                localStorage.removeItem("comps")
                localStorage.removeItem("teams")
                localStorage.removeItem("matches")
                localStorage.setItem("compID", e.target.value);
                location.reload()
              }}
            >
              <option value="" disabled>
                Press the plus to add a competition
              </option>
              {comps.map((comps) => (
                <option key={comps.id} value={comps.id} >
                  {comps.name}
                  {/* <EditComp id={customer.id} /> */}
                </option>
              ))}
            </select>
            <ClipboardDocumentListIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
    )
}