//@ts-nocheck
// import { data } from '../Data/data';

// import useProject from '../../../ContextStore/Store';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../../Store/store";
import {
  faAdd,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowRight,
  faDeleteLeft,
  faRecycle,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { faRProject } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Projects = () => {
  const userProject = useStore((store) => store.userProject);

  const [color,setColor]= useState()
  const projectStatus =(status)=>{
    if (status === ''){
      setColor('')
    }else if(status === 'inProgress'){
      setColor('')
    }else{
      setColor('')
    }
  }

  return (
    <div className="text-dark pt-[10%] px-2 grid  grid-cols-1 md:grid-cols-2 ">
      {userProject.map((data) => {
        // const counter =
        return (
          <div
            key={data.id}
            className="shadow-2xl my-4 border border-gray-200 px-4 py-2 rounded-lg mx-2"
          >
          <div className="flex justify-between">
          <p className="py-3"><small className={`${data.status === 'pending' ?'bg-gray-500' : data.status === 'inProgress' ? 'bg-dark': 'bg-secondary'} text-white px-3 py-1 rounded`}>{data.status}</small></p>
          <button><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          <p className="capitalize font-bold">{data.name}</p>
            <p className="text-sm font-extralight">
              <small>{data.projectDescription}</small>
            </p>
            <div className="flex justify-between py-2">
              <p className="">
                <small>milestone: </small> {data.subTask.length}
              </p>
              <p><small>5 days left</small></p>
              <p>
                <small className="flex space-x-2 items-center">
                  <span className="text-sm text-red-600">Progress:</span>
                  <span className="h-6 w-6 p-3  rounded-full flex justify-center items-center">
                    {" "}
                    {
                      data.subTask?.filter(
                        (task) => task.status === "inProgress"
                      ).length
                    }
                    /{data.subTask?.length}
                  </span>
                </small>
              </p>
            </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Projects;
