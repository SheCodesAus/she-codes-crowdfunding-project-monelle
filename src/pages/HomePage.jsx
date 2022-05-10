import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import ProjectCard from '../components/ProjectCard/ProjectCard';

// Style
import "./HomePage.css"
// import girl from "./blue-girl-toa-heftiba-unsplash"


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
}, []);

    return (
    <main>
    <section className="introduction">
        <article className="left-section">
            <h1>Let them be Huge</h1>   
            <p>Huge is a crowdfunding platform designed  to connect visual artists to their
            fan base beyond the ‘classic’ channels.<br />
            As mainstream channels get crowded (social media overload anyone?) or inaccessible
            (hello lockdowns and restrictions), we provide a new model of community building
            and meaningful engagement through art.<br /><br />
            </p>
        </article>
        <article className="right-section">
            <Link to="/projects" className="action-button">Start browsing projects</Link>
            {/* <img className="intro-illustration" src={ girl }></img> */}
        </article>
    </section>


    <div id="project-list">
        {projectList.map((project, key) => {
            return (
            <ProjectCard
                key={`project-${project.id}`}
                projectData={project} />
            );
        })}
    </div>
    </main>
    );
}

export default HomePage;