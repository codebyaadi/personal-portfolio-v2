"use client";

import { useState } from "react";
import { projectsInfo } from "@/config/projects";
import ProjectCard from "@/components/layouts/project-card";

const Contact = () => {
    const [activeButton, setActiveButton] = useState<string>("All");

    const handleButtonClick = (item: string) => {
        setActiveButton(item);
    };

    const filteredProjects = activeButton === "All" ? projectsInfo : projectsInfo.filter((project) => project.type === activeButton);

    return (
        <section className="flex flex-col justify-start items-start px-6 md:px-28 py-6 md:py-18 font-normal tracking-wide">
            <div>
                <h2 className="font-unbounded text-lg text-white/80">Contact</h2>
            </div>
            <div>
                
            </div>
        </section>
    );
};

export default Contact;
