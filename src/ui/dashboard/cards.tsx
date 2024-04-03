import {
  TrophyIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import { fetchCardData } from '../../lib/data-handler';
// import { cairo_play } from '@/app/ui/fonts';

const iconMap = {
  collected: TrophyIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: DocumentIcon,
};

function fetchData() {
  let status = 'pending';
  let result: any;

  const promise = fetchCardData()
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

export default function CardWrapper() {

  const {
    nextMatch,
    totalTeams,
    ourNextMatch,
    highScore,
  } = dataWrapper.read();

  return (
    <>
      <Card title="Highest Match Score" value={highScore + " Points"} type="collected" />
      <Card title="Our Next Match" value={"Q " + ourNextMatch} type="pending" />
      <Card title="Next Match" value={"Q " + nextMatch} type="invoices" />
      <Card title="Total Teams" value={totalTeams} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        // className={`${cairo_play.className}
        className={`
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
