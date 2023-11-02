import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { AiOutlinePlus } from 'react-icons/ai';
import './index.css';

function CourseHeader() {
  return (
    <div className="wd-modules-screen mt-3">
      <button className="btn wd-bg-lightgray  me-1">Collapse All</button>
      <button class="btn wd-bg-lightgray me-1">View Progress</button>
      <select class="btn wd-bg-lightgray me-1">
        <option selected>Publish All</option>
      </select>
      <button class="btn btn-danger me-1">
        <AiOutlinePlus />
        Module
      </button>
      <button class="btn wd-bg-lightgray">
        <HiOutlineEllipsisVertical />
      </button>
      <hr />
    </div>
  );
}

export default CourseHeader;