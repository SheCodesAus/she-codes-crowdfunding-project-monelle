import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

// Components
import ProjectOwner from "../components/ProjectOwner/ProjectOwner";
import PledgeForm from "../components/PledgeForm/PledgeForm";


function ProjectPage() {
//  State
const [projectData, setProjectData] = useState();

// Hooks
const { id } = useParams();
// console.log(id)

//  Actions and Helpers
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectData(data);
    });
}, [id]);

    // Loading State
    if (!projectData) {
    return <h3>Loading project....</h3>;
    }

    // Normal state
    return (
    <>
        <h2>{projectData.title}</h2>
        <h3>Created by <ProjectOwner owner={projectData.owner} /></h3>
        <h3>On {projectData.date_created}</h3>
        {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
        <h3>Title: {projectData.description}</h3>
        <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                return (
                    <li>
                    {pledgeData.amount} from {pledgeData.supporter}
                    </li>
                );
                })}
            </ul>
            <PledgeForm projectId={id} />
    </>
);
}

export default ProjectPage;