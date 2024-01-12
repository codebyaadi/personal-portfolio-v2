import SkillCard from "@/components/layouts/skills-card";
import { skillsInfo } from "@/config/skills";

const Skills = () => {
    return (
        <section className="flex flex-col justify-start items-start px-6 md:px-28 py-6 md:py-18 font-normal tracking-wide">
            <div>
                <h2 className="font-unbounded text-lg text-white/80">Skills</h2>
            </div>
            <div className="w-full mx-auto mt-8 flex flex-col md:flex-row justify-between items-start">
                {skillsInfo.map((skill) => (
                    <SkillCard id={skill.id} icon={skill.icon} title={skill.title} skills={skill.skills} />
                ))}
            </div>
        </section>
    );
}

export default Skills;