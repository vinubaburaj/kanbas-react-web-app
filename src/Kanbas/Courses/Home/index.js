import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="wd-home">
      <h3>Home</h3>
      <div className="d-flex">
        <div>
          <ModuleList />
        </div>
        <div className="wd-course-status ms-4">
          <h5>Status</h5>
        </div>
      </div>
    </div>
  );
}
export default Home;
