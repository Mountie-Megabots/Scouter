import {
  HashtagIcon
} from '@heroicons/react/24/outline';
import { Button } from '../button';
// import { createInvoice } from '../../lib/actions';

function getMyTeamNum() {
  let teamNum:any = ""
  if (localStorage.getItem("teamNum") != null){
    teamNum = localStorage.getItem("teamNum")
  }
 return teamNum
}

export default function SettingsForm() {
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      //@ts-ignore
      localStorage.setItem("teamNum", event.target.teamNum.value);
        }
      }>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter your Team #
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                defaultValue={getMyTeamNum()}
                id="teamNum"
                name="teamNum"
                type="number"
                step="0.01"
                placeholder="Enter Team #"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
