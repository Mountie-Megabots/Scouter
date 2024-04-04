import Pagination from '../../ui/matches/pagination';
import Search from '../../ui/search';
import Table from '../../ui/teams/table';
import { AddComp, CreatePitScout, ExportPitScout, SyncNow } from '../../ui/matches/buttons';
// import { cairo_play } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '../../ui/skeletons';
import { Suspense } from 'react';
import CompDropdown from '../../ui/comp-dropdown';
import SideNav from '../../ui/dashboard/sidenav';
 
export default function Teams() {
  const totalPages = 1

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
    <div className="w-full">
    <div className="flex w-full items-center justify-between gap-2">
      {/* <h1 className={`${cairo_play.className} text-2xl`}>Teams</h1> */}
      <h1 className={` text-2xl`}>Teams</h1>
      <div className='flex gap-2'>
      <CompDropdown compID={'1'}/>
      <AddComp/>
      </div>
      <SyncNow/>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
    <Search placeholder="Search Teams..." />
    <ExportPitScout />
    <CreatePitScout />
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table/>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
    </div>
    </div>
  );
}