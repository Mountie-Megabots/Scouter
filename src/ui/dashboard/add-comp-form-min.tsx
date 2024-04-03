
//@ts-nocheck
import {
  ClipboardDocumentListIcon,
  HashtagIcon,
  IdentificationIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { Button } from '../button';
import { createComp } from '../../lib/data-handler';

export default function MinCompForm() {
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      //@ts-ignore
      createComp(event.target.name.value, event.target.blueid.value)
        }
      }>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Comp nickname */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter a nickname for the competition
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Enter nickname"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

         {/* Blue ID */}
         <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter Blue Alliance ID for this comp
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="blueid"
                name="blueid"
                type="string"
                placeholder="Enter comp competition"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <a
          href="/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </a>
        <Button type="submit">Create Competition</Button>
      </div>
    </form>
  );
}
