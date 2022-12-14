import "./Page1.css";
import ActivityList from "../Page1/Activity-list/ActivityList";
import Sidebar from "../Page1/Sidebar/Sidebar";
import Profile from "../Page1/Sidebar/Profile"

const Page1 = () => {
  return (
    <div className="Page1">
      <div className="body">
        <div className="Profile-top" >
            <Profile />
        </div>
        <Sidebar />
        <div className="Activity">
          <ActivityList />
        </div>
      </div>
    </div>
  );
};

export default Page1;
