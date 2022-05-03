import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ProjectOwner from "../components/ProjectOwner/ProjectOwner";

// // Data
// import { oneProject } from "../data"


function ProjectPage() {

//  State
const [projectData, setProjectData] = useState({pledges: []});

// Hooks
const { id } = useParams();
console.log(id)

//  Actions and Helpers
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {setProjectData(data);
    });
}, [id]);

    // Loading State
    if (!projectData) {
    return <h3>Loading project....</h3>;
    }

    // Normal state
    return (
    <React.Fragment>
        <h2>{projectData.title}</h2>
        {/* This added from Hannah's project */}
        <h3>Created by or whatever <ProjectOwner owner={projectData.owner} /> on {projectData.date_created}</h3>
        {/* <h3>Created at: {projectData.date_created}</h3> */}
        <h3>{`Status: ${projectData.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>{projectData.pledges.map((pledgeData, key) => {
            return (
            <li key={key}>{pledgeData.amount} from {pledgeData.supporter}
            </li>
            );
        })}
        </ul>
    </React.Fragment>
);
}

export default ProjectPage;