import React from "react";

const Project = (props) => {
    const imageOrder = props.reversed ? "md:order-last" : "md:order-first"
    const detailOrder = props.reversed ? "md:order-first" : "md:order-last"

    return (
        <div className={`${props.className} md:mt-[60px]`}>
            <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px]">
                <div className={`${imageOrder} flex-none`}>
                    <img src={`/images/${props.project.projectImage}`} className="w-[200px] md:w-auto" alt={""} />
                </div>
                <div className={`${detailOrder} flex flex-col items-center md:items-start`}>
                    <h2 className="project-title">{props.project.projectName}</h2>
                    <p className="project-details">{props.project.projectDescription}</p>
                    <button
                        className="px-[17px] py-[6px] mt-[20px] font-lato font-regular text-[14px] text-[#8495A0] border border-[#8495A0] rounded-[4px]">
                        Open in play store
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;