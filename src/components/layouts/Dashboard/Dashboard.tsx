import './Dashboard.scss';
import Views from 'src/modules';
import { NavHeader, NavChats } from 'src/components/template';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <NavHeader />
        <NavChats />
      </div>
      <div className="dashboard__right">
        <Views />
      </div>
    </div>
  );
};

export default Dashboard;
