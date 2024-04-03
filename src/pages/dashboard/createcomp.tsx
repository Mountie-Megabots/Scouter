//@ts-nocheck

import Breadcrumbs from '../../ui/matches/breadcrumbs';
import { fetchComps } from '../../lib/data-handler';
import CompForm from '../../ui/dashboard/add-comp-form';
import SideNav from '../../ui/dashboard/sidenav';
import MinCompForm from '../../ui/dashboard/add-comp-form-min';
 
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

export default function CreateComp() {
  const comps = dataWrapper.read()
 
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          {
            label: 'Add Competition',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <MinCompForm comps={comps} />
    </main>
    </div>
    </div>
  );
}