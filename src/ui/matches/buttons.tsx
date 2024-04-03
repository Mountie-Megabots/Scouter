//@ts-nocheck
import { PencilIcon, PlusIcon, TrashIcon, ArrowPathIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export function CreateScoutData() {
  return (
    <a
      href="/dashboard/matches/create"
      className="flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      <span className="hidden md:block">Add Scout Data</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </a>
  );
}

export function CreatePitScout() {
  return (
    <a
      href="/dashboard/teams/pitscout"
      className="flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      <span className="hidden md:block">Pit Scout</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </a>
  );
}

export function SyncNow() {
  return (
    <button
      onClick={() =>{
        localStorage.removeItem("comps")
        localStorage.removeItem("teams")
        localStorage.removeItem("matches")
        location.reload()
      }}
      className="flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      <span className="hidden md:block">Sync</span>{' '}
      <ArrowPathIcon className="h-5 md:ml-4" />
    </button>
  );
}

export function AddComp() {
  return (
    <a
      href="/dashboard/addcomp"
      className="flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      <PlusIcon className="h-5" />
    </a>
  );
}

export function EditComp({ id }: { id: string }) {
  return (
    <a
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </a>
  );
}

export function ViewTeamButton({ teamNum }: { teamNum: string }) {
  return (
    <a
      href={`/dashboard/teams/view?${teamNum}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <ArrowTopRightOnSquareIcon className="w-5" />
    </a>
  );
}

export function ViewMatchButton({ matchNum }: { matchNum: string }) {
  return (
    <a
      href={`https://www.thebluealliance.com/match/${'2024mibkn'}_qm${matchNum}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <ArrowTopRightOnSquareIcon className="w-5" />
    </a>
  );
}

export function DeleteMatch({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
