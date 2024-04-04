//@ts-ignore
import CardWrapper from '../../ui/dashboard/cards';
import ScoreChart from '../../ui/dashboard/score-chart';
import UpcomingMatches from '../../ui/dashboard/upcoming-matches';
// import { cairo_play } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { ScoreChartSkeleton, CardsSkeleton, LatestInvoicesSkeleton } from '../../ui/skeletons';
import { AddComp, SyncNow } from '../../ui/matches/buttons';
import CompDropdown from '../../ui/comp-dropdown';
import SideNav from '../../ui/dashboard/sidenav';
 
export default function Dashboard() {
  const compID = "1";
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
    <main>
      <div className="flex w-full items-center justify-between gap-2">
        {/* <h1 className={`${cairo_play.className} text-2xl`}>Dashboard</h1> */}
        <h1 className={`text-2xl`}>Dashboard</h1>
        <div className='flex gap-2'>
        <CompDropdown compID={compID} />
        <AddComp/>
        </div>
        <SyncNow/>
      </div>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <Suspense fallback={<ScoreChartSkeleton />}>
          <ScoreChart />
        </Suspense> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <UpcomingMatches />
        </Suspense>
      </div>
    </main>
    </div>
    </div>
  );
}