import React from "react";
import Project from "./Project";

const projectItems = [
    {
        projectName: 'KidCare',
        projectImage: 'kidcare.png',
        projectDescription: "It helps parents to find care givers for their children. It shows people based on reviews and location of the parent.",
        projectUrl: 'https://play.google.com/store/apps/details?id=com.kidcare.parent'
    },
    {
        projectName: 'Navex',
        projectImage: 'navex.png',
        projectDescription: "It helps users to virtually see the exhibition map so they can know where the particular shop or store is located. On top of that, users can buy items from running exhibitions.",
        projectUrl: 'https://play.google.com/store/apps/details?id=com.navex.app'
    },
    {
        projectName: 'Reelvolution',
        projectImage: 'reelvolution.png',
        projectDescription: "Different fishing leagues can be organised using this application. Users can participate in the running competitions and they can win exiting prices.",
        projectUrl: 'https://play.google.com/store/apps/details?id=com.reelvolution.app'
    },
    {
        projectName: 'Auto Redial',
        projectImage: 'auto-redial.png',
        projectDescription: "It redials a given number until it gets connected. Users can tweak some settings to change auto redial time and other things.",
        projectUrl: ''
    }
]

const Projects = () => {
    return (
        <section className="section-container flex flex-col items-center md:items-start" id={"Projects"}>
            <h2 className="text-[#132C47] section-header text-center">What I have created?</h2>
            {
                projectItems.map((item, index) => <Project key={item.projectName} className={index === 0 ? "mt-[1px]" : "mt-[40px]"} project={item} reversed={index % 2 !== 0} /> )
            }
        </section>
    );
};



export default Projects;