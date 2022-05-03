import React, { useState, useEffect } from "react";

// Components
import ProjectCard from '../components/ProjectCard/ProjectCard';

// Data
// import { allProjects as projectList } from "../data";
import { allProjects } from "../data";


function HomePage() {
// States
    const [projectList, setProjectList] = useState([]);

//  Action and Helpers
    // UseEffect runs this specific piece of code within the whole program
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json();
            })
        .then((data) => {
            setProjectList(data);
        });
        
    // !!! Below line imports the fake data we put in our src file: (comment out when using real stuff)
    // setProjectList(allProjects);
}, []);

    return (
    <div id="project-list">
        {projectList.map((project, key) => {
            return (
            <ProjectCard
                key={`project-${project.id}`}
                projectData={project} />
            );
        })}
    </div>
    );
}

export default HomePage;