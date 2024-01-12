"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ProjectInfoType } from "@/config/types";

const ProjectCard: React.FC<ProjectInfoType> = ({
    id,
    name,
    description,
    img,
    link,
    tech_stack,
    type,
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{ duration: 0.4, type: "tween", delay: id * 0.2 }}
            key={id}
            className="bg-charcoalblue p-3 rounded"
        >
            <div id="image" className="w-full h-40 rounded overflow-hidden">
                <Image
                    src={img}
                    alt={name}
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="font-prompt mt-2 md:mt-4">
                <h3 className="font-medium mb-1 text-white text-base md:text-lg">{name}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                    {tech_stack.map((tech, index) => (
                        <span
                            key={`${index}-${tech}`}
                            className="bg-[#930BFD]/10 px-3 py-1 text-xs text-[#930BFD] font-normal rounded-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <code className="sr-only">{type}</code>
        </motion.div>
    );
};

export default ProjectCard;