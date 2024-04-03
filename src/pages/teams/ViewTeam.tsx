//@ts-nocheck
import Breadcrumbs from '../../ui/matches/breadcrumbs';
import SideNav from '../../ui/dashboard/sidenav';
import SettingsForm from '../../ui/dashboard/settings-form';
import PitScoutForm from '../../ui/teams/create-pitscout-form';
import { fetchComps, fetchTeams, getPitScoutByTeam } from '../../lib/data-handler';
import ViewPitScoutForm from '../../ui/teams/view-pitscout-form';

function fetchData(teamNum) {
  let status = 'pending';
  let result: any;

  const promise = getPitScoutByTeam(teamNum)
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

const dataWrapper = fetchData(window.location.search.substring(1));

export default function ViewTeams() {

  const teamNum = window.location.search.substring(1);
  const pitscout = dataWrapper.read()
 
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Teams', href: '/dashboard/teams' },
          {
            label: `View Team: ${teamNum}`,
            href: `/dashboard/teams/${teamNum}/`,
            active: true,
          },
        ]}
      />
      <ViewPitScoutForm pitscout={pitscout}/>
      {console.log(pitscout)}
    </main>
    </div>
    </div>
  );
}