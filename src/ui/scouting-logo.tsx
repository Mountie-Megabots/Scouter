import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
// import { cairo_play } from '@/app/ui/fonts';

export default function ScoutingLogo() {
  return (
    <div
      // className={`${cairo_play.className} flex flex-row items-center leading-none text-white`}
      className={`flex flex-row items-center leading-none text-white`}
    >
      <ArchiveBoxIcon className="h-12 w-12 "/>
      <p className="text-[33px]">Scouter</p>
    </div>
  );
}
