import ModuleList from "./ModuleList";
import './index.css';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
function Modules() {
  return (
    <div className="wd-modules-screen mt-3">
      <button className="btn wd-bg-lightgray  me-1">Collapse All</button>
      <button class="btn wd-bg-lightgray me-1">View Progress</button>
      <select class="btn wd-bg-lightgray me-1">
        <option selected>Publish All</option>
      </select>
      <button class="btn btn-danger me-1">
        <i class="fa fa-plus" aria-hidden="true"></i> Module
      </button>
      <button class="btn wd-bg-lightgray">
        <HiOutlineEllipsisVertical />
      </button>
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;
