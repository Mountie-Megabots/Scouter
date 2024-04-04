//@ts-nocheck
import {
  CheckIcon,
  ClockIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../button';
import { createComp, createPitScout } from '../../lib/data-handler';

export default function PitScoutForm({ teamNum }: { teamNum }) {

  let botPic = ''

  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        //@ts-ignore
        createPitScout(event, botPic)
        }
      }>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="team" className="mb-2 block text-sm font-medium">
            Choose Team
          </label>
          <div className="relative">
            <select
              id="team"
              name="teamNum"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a team
              </option>
              {teamNum.map((team) => {
                if(team.pitscout == 'pending'){
                 return (<option key={team.teamNum} value={team.teamNum}>
                    {team.teamNum}
                  </option>)
                }
              })}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="frame" className="mb-2 block text-sm font-medium">
            Auto Routines Discription
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="frame"
                name="autoroutines"
                type="string"
                placeholder="Enter auto routines"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="robotpic" className="mb-2 block text-sm font-medium">
            Robot Picture Upload
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <input type="file" id="robotpic" name="filename" onChange={
              () => {
                let file = document.querySelector(
                    'input[type=file]')['files'][0];
     
                let reader = new FileReader();
                console.log("Converting Bot Pic");
     
                reader.onload = function () {
                    botPic = reader.result.replace("data:", "")
                        .replace(/^.+,/, "");
     
                    console.log(botPic);
                }
                reader.readAsDataURL(file);
            }
            } required/>
            </div>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="frame" className="mb-2 block text-sm font-medium">
            Frame Primeter (Without Bumpers)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="frame"
                name="frameprimeter"
                type="string"
                placeholder="Enter frame primeter"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="weight" className="mb-2 block text-sm font-medium">
            Robot Weight
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="weight"
                name="totalweight"
                type="number"
                step="0.01"
                placeholder="Enter weight"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="drivetrain" className="mb-2 block text-sm font-medium">
            Drivetrain (ex. SDS MK4's or Tank Drive)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="drivetrain"
                name="drivetraintype"
                type="string"
                placeholder="Enter drivetrain"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Intake
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="ground"
                  name="status"
                  type="radio"
                  value="ground"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="ground"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Ground
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="source"
                  name="status"
                  type="radio"
                  value="source"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="source"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Source
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="both"
                  name="status"
                  type="radio"
                  value="both"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="both"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Both
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="none"
                  name="status"
                  type="radio"
                  value="none"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="none"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  None
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="mb-4">
          <label htmlFor="auto" className="mb-2 block text-sm font-medium">
            Scoring Positions Discrptions
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="auto"
                name="scoringpos"
                type="string"
                placeholder="Enter auto routines"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
              Can Drive Under Stage?
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="false"
                  name="stage"
                  type="radio"
                  value="false"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="false"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  False 
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="true"
                  name="stage"
                  type="radio"
                  value="true"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="true"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  True
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="mb-4">
          <label htmlFor="comment" className="mb-2 block text-sm font-medium">
            Comments
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="comment"
                name="comments"
                type="string"
                placeholder="Enter your Comments"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 flex justify-end gap-4">
        <a
          href="/dashboard/matches"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </a>
        <Button type="submit">Create Pit Scout</Button>
      </div>
    </form>
  );
}
