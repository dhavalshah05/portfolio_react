import React from "react";

const About = () => {
    return (
        <section className="bg-[#132C47]">
            <div className="section-container flex flex-col items-center md:items-start">
                <h2 className="section-header text-[#E1ECF3]">What I do?</h2>
                <p className="mt-[20px] md:mt-[30px] text-[#E1ECF3]/80 text-[16px] md:text-[18px] font-lato font-regular text-center md:text-left tracking-[0.4px]">
                    I am an application developer having 5+ years of experience, who build apps which are simple in
                    terms of UX
                    and rich in terms of UI and functionality.
                    &nbsp;Currently, I am focused on building beautiful apps using <a href={"https://developer.android.com/jetpack/compose"} target={"_blank"} rel={"noreferrer"} className="text-[#FF8578] cursor-pointer">Jetpack Compose.</a>
                </p>
            </div>
        </section>
    );
};

export default About;