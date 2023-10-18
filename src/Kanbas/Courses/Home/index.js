import ModuleList from "../Modules/ModuleList";
import CourseHeader from '../CourseHeader';
import CourseStatus from "../CourseStatus";

function Home() {
  return (
    <div className="wd-home">
      <div className="d-flex">
        <div className="w-75">
        <CourseHeader />
          <ModuleList />
        </div>
        <div className="wd-course-status ms-4">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
export default Home;
