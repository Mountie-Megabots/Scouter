//@ts-nocheck
import {
  CheckIcon,
  ClockIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../button';
import { createComp, createPitScout } from '../../lib/data-handler';

export default function ViewPitScoutForm({ pitscout }: { pitscout }) {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

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
                defaultValue={pitscout.data.autoRoutines}
                disabled
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="robotpic" className="mb-2 block text-sm font-medium">
            Robot Picture
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <img
            src={pitscout.data.botPic}
            />
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
                defaultValue={pitscout.data.framePrimeter}
                disabled
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
                defaultValue={pitscout.data.weight}
                disabled
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Drivetrain Type
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="swerve"
                  name="drivetrain"
                  type="radio"
                  value="swerve"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.drivetrainType == 'swerve'}
                />
                <label
                  htmlFor="swerve"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Swerve
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="mecanum"
                  name="drivetrain"
                  type="radio"
                  value="mecanum"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  checked={pitscout.data.drivetrainType == 'mecanum'}
                  disabled
                />
                <label
                  htmlFor="mecanum"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Mecanum
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="tank"
                  name="drivetrain"
                  type="radio"
                  value="tank"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  checked={pitscout.data.drivetrainType == 'tank'}
                  disabled
                />
                <label
                  htmlFor="tank"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Diff/Tank
                </label>
              </div>
            </div>
          </div>
        </fieldset>  

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="drivetrain" className="mb-2 block text-sm font-medium">
            Drivetrain Notes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="drivetrainnote"
                name="drivetrainnotes"
                type="string"
                placeholder="Enter drivetrain notes"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={pitscout.data.drivetrain}
                disabled
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
                  disabled
                  checked={pitscout.data.intake == 'ground'}
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
                  disabled
                  checked={pitscout.data.intake == 'source'}
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
                  disabled
                  checked={pitscout.data.intake == 'both'}
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
                  disabled
                  checked={pitscout.data.intake == 'none'}
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

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Scoring Capability
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="speaker"
                  name="scoring"
                  type="radio"
                  value="speaker"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.scoringType == 'speaker'}
                />
                <label
                  htmlFor="speaker"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Speaker Only
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="amp"
                  name="scoring"
                  type="radio"
                  value="amp"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.scoringType == 'amp'}
                />
                <label
                  htmlFor="amp"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Amp Only
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="both"
                  name="scoring"
                  type="radio"
                  value="both"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.scoringType == 'both'}
                />
                <label
                  htmlFor="both"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Both
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
                defaultValue={pitscout.data.scoringPos}
                disabled
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
              Can Do Trap?
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="false"
                  name="trap"
                  type="radio"
                  value="false"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={!pitscout.data.trap}
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
                  name="trap"
                  type="radio"
                  value="true"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.trap}
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

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
              Can Drive Under Stage?
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="always"
                  name="stage"
                  type="radio"
                  value="always"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.driveUnderStage == 'always'}
                />
                <label
                  htmlFor="always"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Awalys 
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="sometimes"
                  name="stage"
                  type="radio"
                  value="sometimes"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.driveUnderStage == 'sometimes'}
                />
                <label
                  htmlFor="sometimes"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Sometimes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="no"
                  name="stage"
                  type="radio"
                  value="no"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.driveUnderStage == 'no'}
                />
                <label
                  htmlFor="no"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Needs Help?
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="auto"
                  name="help"
                  type="radio"
                  value="auto"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.help == 'auto'}
                />
                <label
                  htmlFor="auto"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Auto Help
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="electrical"
                  name="help"
                  type="radio"
                  value="electrical"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.help == 'electrical'}
                />
                <label
                  htmlFor="electrical"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Electrical Help
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="mechanical"
                  name="help"
                  type="radio"
                  value="mechanical"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.help == 'mechanical'}
                />
                <label
                  htmlFor="mechanical"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Mechanical Help
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="none"
                  name="help"
                  type="radio"
                  value="none"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  disabled
                  checked={pitscout.data.help == 'none'}
                />
                <label
                  htmlFor="none"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Doesn't Need Help
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="mb-4">
          <label htmlFor="helpscomment" className="mb-2 block text-sm font-medium">
            More Details About Needed Help
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="helpscomment"
                name="helpcomments"
                type="string"
                placeholder="Enter details about help"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                disabled
                defaultValue={pitscout.data.helpDetails}
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>


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
                defaultValue={pitscout.data.comments}
                disabled
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

      </div>

    </form>
  );
}
