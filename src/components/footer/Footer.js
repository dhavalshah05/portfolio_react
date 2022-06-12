import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#F2F8FC]">
            <section className="section-container">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-[30px]">
                    <h2 className="text-[#132C47] section-header text-center">Where to contact me?</h2>
                    <div className="flex flex-row gap-[20px]">
                        <FooterItem href="https://github.com/dhavalshah05" icon={"icon-github.svg"} />
                        <FooterItem href="https://twitter.com/_shahdhaval" icon={"icon-twitter.svg"} />
                        <FooterItem href="https://www.linkedin.com/in/dhavalshah53" icon={"icon-linkedin.svg"} />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FooterItem = (props) => {
  return (
      <a href={props.href} target="_blank">
          <img alt="" src={`/images/icons/${props.icon}`}
               className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]" />
      </a>
  );
};

export default Footer;