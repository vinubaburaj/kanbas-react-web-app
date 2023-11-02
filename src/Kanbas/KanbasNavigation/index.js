import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiBookBookmark} from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineHistory } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Help",
  ];
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon wd-account" />,
    Dashboard: <AiOutlineDashboard className="wd-icon" />,
    Courses: <BiBookBookmark className="wd-icon" />,
    Calendar: <BsCalendarWeek className="wd-icon" />,
    Inbox: <HiOutlineMailOpen className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <TbDeviceDesktopAnalytics className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation-list">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`mb-3 list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
