//@ts-nocheck
import Form from '@/app/ui/matches/edit-form';
import Breadcrumbs from '@/app/ui/matches/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
 
export default async function ViewTeam({ params }: { params: { teamNum: string } }) {
  const teamNum = params.teamNum;
//   const [invoice, customers] = await Promise.all([
//     // fetchInvoiceById(id),
//     // fetchCustomers(),
//   ]);
  return (
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
      
    </main>
  );
}