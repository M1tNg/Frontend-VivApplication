import "./Sidebar.css";
import Profile from "./Profile";
import Summary from "./Summary";
import Tips from "./Tips";
import Weeklystat from "./Weeklystat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <Weeklystat />
      <Tips />
      <Summary />
    </div>
  );
};

export default Sidebar;
