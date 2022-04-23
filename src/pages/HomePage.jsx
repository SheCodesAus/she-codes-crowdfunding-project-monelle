import React from "react";

// Components
import ProjectCard from '../components/ProjectCard/ProjectCard';

// Data
import { allProjects } from "../data";


function HomePage() {
    return (
    <div id="project-list">
        {allProjects.map((projectData, key) => {
            return (
            <ProjectCard
                key={`project-${projectData.id}`}
                projectData={projectData} />
            );
        })}
    </div>
    );
}

export default HomePage;