import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-bg-lightgray">
             <h5>{module.name}</h5>
             <p>{module.description}</p>
           </li>
      ))
    }
    </ul>
  );
}
export default ModuleList
 