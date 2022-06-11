import React from "react";
import Project from "./Project";

const projectItems = [
    {
        projectName: 'KidCare',
        projectImage: 'kidcare.png',
        projectDescription: "It helps parents to find care givers for their children. It shows people based on reviews and location of the parent."
    },
    {
        projectName: 'Navex',
        projectImage: 'navex.png',
        projectDescription: "It helps users to virtually see the exhibition map so they can know where the particular shop or store is located. On top of that, users can buy items from running exhibitions."
    },
    {
        projectName: 'Reelvolution',
        projectImage: 'reelvolution.png',
        projectDescription: "Different fishing leagues can be organised using this application. Users can participate in the running competitions and they can win exiting prices."
    },
    {
        projectName: 'Auto Redial',
        projectImage: 'auto-redial.png',
        projectDescription: "It redials a given number until it gets connected. Users can tweak some settings to change auto redial time and other things."
    }
]

const Projects = () => {
    return (
        <section className="section-container flex flex-col items-center md:items-start">
            <h2 className="text-[#132C47] section-header">What I have created?</h2>
            <Project className={"mt-[1px]"} project={projectItems[0]} />
            <Project className={"mt-[40px]"} project={projectItems[1]} reversed={true} />
            <Project className={"mt-[40px]"} project={projectItems[2]} />
            <Project className={"mt-[40px]"} project={projectItems[3]} reversed={true} />
        </section>
    );
};

export default Projects;