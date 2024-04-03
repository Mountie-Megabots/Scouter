//@ts-nocheck
import Breadcrumbs from '../ui/matches/breadcrumbs';
import { fetchComps } from '../lib/data-handler';
import CompForm from '../ui/dashboard/add-comp-form';
import SideNav from '../ui/dashboard/sidenav';
import SettingsForm from '../ui/dashboard/settings-form';


export default function ChangeSettings() {
 
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
            label: 'Settings',
            href: '/dashboard/settings',
            active: true,
          },
        ]}
      />
      <SettingsForm />
    </main>
    </div>
    </div>
  );
}