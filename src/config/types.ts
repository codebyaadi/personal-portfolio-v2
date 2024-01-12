import { Icon } from "iconsax-react";

export interface ProjectInfoType {
    id: number;
    name: string;
    description: string;
    img: string;
    link: string;
    tech_stack: string[];
    type: string;
};

export interface SkillsType {
    id: number;
    icon: Icon;
    title: string;
    skills: string[];
}